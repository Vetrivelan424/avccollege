const mysql = require("mysql");

const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs");

const multer = require("multer");

const exphbs = require('express-handlebars'); // updated to 6.0.X
const fileUpload = require('express-fileupload');

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
exports.semform=(req,res)=>{
    db.getConnection((err, connection) => {
        if (err) throw err

        let id = req.params.id;
        connection.query("select * from details where Id=?", [id], (err, rows) => {
            connection.release();
            if (!err) {
                console.log("good");
                res.render("semster", { rows });

            }
            else {
                console.log("bad");
            }
        })
    });
}
exports.sem=async(req,res)=>{
    // console.log(req.body.subject);
    // console.log("hi kathir");
    let {mark,Exam}=req.body;
     let cid=req.params.id
     
    var i=0;
    var subject=["HS5151-TechnicalEnglish", "MA5158-EngineeringMathematics I", "PH5151-Engineering Physics", "CY5151-Engineering Chemistry", "GE5153-Problem Solving and Python Programming"]
    let len=subject.length;
        
    if(Exam=="cia1"){
    for(i=0;i<len;i++){
    db.query("insert into semster1 (subjectname,cia1,cid) values(?,?,?)",[subject[i],mark[i],cid],(err,res)=>{
       
     if(err){
            console.log("this ids error")
            console.log(err)
        }else{
            console.log(res)
       
            console.log("sucessfuly inserted")
        }
    })

}
mark=[];
res.render("semster");
}
else if(Exam=="cia2"){
    
    for(i=0;i<len;i++){
        db.query("update semster1 set cia2=? where subjectname=? and cid=?",[mark[i],subject[i],cid],async(err,res)=>{
            
         if(err){
                console.log("this ids error")
                console.log(err)
            }else{
                console.log(res)
           
                console.log("sucessfuly inserted")
            }
        })
    
    }
    mark=[];
    res.render("semster");

}else if(Exam=="modal"){
    
    for(i=0;i<len;i++){
        db.query("update semster1 set modal=? where subjectname=? and cid=?",[mark[i],subject[i],cid],async(err,res)=>{
            
         if(err){
                console.log("this ids error")
                console.log(err)
            }else{
                console.log(res)
           
                console.log("sucessfuly inserted")
            }
        })
    
    }
    mark=[];
    res.render("semster");


}else if(Exam=="sem1"){
    
       
    for(i=0;i<len;i++){
        db.query("update semster1 set semster=? where subjectname=? and cid=?",[mark[i],subject[i],cid],async(err,res)=>{
            
         if(err){
                console.log("this ids error")
                console.log(err)
            }else{
                console.log(res)
           
                console.log("sucessfuly inserted")
            }
        })
    
    }
    mark=[];
    res.render("semster");


}
   
}



exports.register = (req, res) => {

    const { name, email, password, confirmpassword } = req.body;

    db.query("SELECT email FROM login_table  WHERE email=?", [email], async (err, result) => {

        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            return res.render('register', {
                message: 'That email already exist'
            });

        } else if (password !== confirmpassword) {
            return res.render('register', {
                message: 'password Do not match'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query("INSERT INTO login_table SET ? ", { name: name, email: email, password: hashedPassword }, (err, result) => {
            if (err) {
                console.log(err);
            } else if (!err) {
                console.log(result);
                res.render("studentdetails")
            }
        })
    })

}

exports.login = async (req, res) => {

    const { username, password } = req.body;

    db.query("SELECT * FROM details  WHERE email=?", [username], async (err, result) => {
        if (err) throw err

        console.log(result[0].id)
        if (!result.length || !await bcrypt.compare(password, result[0].password)) {
            return res.json({ status: "error", Error: "incorrect email or password" })
        }

        else if (result[0].id) {
            db.query('SELECT * FROM details WHERE id=?', [result[0].id], (err, rows) => {

                if (!err) {

                    res.render('userprofile', { rows });
                }
            })
        }
    })

}

exports.adminlogin = (req, res) => {
    const { name, password } = req.body;

    db.query("SELECT * FROM admin_login  WHERE name=? and password=?", [name, password], (err, result) => {
        console.log(result)
        if (err) {
            console.log(err)
        } else if (result[0] == null) {
            console.log(err)
        }
        else {
            db.query("select * from details", (err, rows) => {
                if (err) throw err
                console.log(rows)
                res.render("data", { rows })
            })

        }
    })
}

exports.studentdetails = (req, res) => {

    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = "./upload/" + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);

        let { name, rollno, regno, email, sm, pm, address, city, state, pincode, department, dob,
            fathername, focc, mothername, mocc, accno, adharno, community, bloodg
            , sslc, hsc, admission, join, password, confirmpassword, year } = req.body;

        console.log(password);
        console.log(confirmpassword);

        db.query("SELECT email FROM details  WHERE email=?", [email], async (err, result) => {

            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                return res.send("the email is alredy  enter")


            } else if (password !== confirmpassword) {

                return res.send("password missmatch")
            } else {
                let hashedPassword = await bcrypt.hash(password, 8);
                console.log(hashedPassword);

                db.query("INSERT INTO details SET ? ", {
                    name: name, rollno: rollno, regno: regno, email: email, sm: sm, pm: pm, address: address, city: city, state: state, pincode: pincode, department: department, dob: dob, year: year,
                    fathername: fathername, focc: focc, mothername: mothername, mocc: mocc, accno: accno, adharno: adharno, community: community, bloodg: bloodg, sslc: sslc, hsc: hsc, admission: admission, join: join, file_src: sampleFile.name, password: hashedPassword
                }, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else if (!err) {
                        console.log(result);
                        db.query("SELECT * FROM details  WHERE email=?", [email], async (err, result) => {
                            if (err) throw err

                            console.log(result[0].id)


                            if (result[0].id) {
                                db.query('SELECT * FROM details WHERE id=?', [result[0].id], (err, rows) => {

                                    if (!err) {

                                        res.render('userprofile', { rows });
                                    }
                                })
                            }
                        })


                    }
                })
            }
        })
    })


}

exports.deleteuser = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err
        let id = req.params.id;
        console.log(id)
        connection.query("DELETE FROM details where id=?", [id], (err, row) => {
            connection.release();
            if (!err) {
                db.query("select * from details", (err, rows) => {
                    if (err) throw err
                    res.render("data", { rows })
                })
            }
            else {
                console.log("bad");
            }
        })
    })

}
exports.view = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err

        let id = req.params.id;
        connection.query("select * from details where Id=?", [id], (err, rows) => {
            connection.release();
            if (!err) {
                console.log("good");
                res.render("userprofile", { rows });

            }
            else {
                console.log("bad");
            }
        })
    });

}
exports.edituser = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err

        let id = req.params.id;
        connection.query("select * from details where Id=?", [id], (err, rows) => {
            connection.release();
            if (!err) {
                console.log("good");
                res.render("edituser", { rows });

            }
            else {
                console.log("bad");
            }
        })
    });

}

exports.edit = (req, res) => {
    let id = req.params.id;
    let { name, rollno, regno, email, sm, pm, address, city, state, pincode, department, dob,
        fathername, focc, mothername, mocc, accno, adharno, community, bloodg
        , sslc, hsc, admission, join, year } = req.body;
    db.query("SELECT * from details where id=?", [id], (err, result) => {
        console.log(result)
        if (!err) {
            db.query("UPDATE details SET ? where id=? ", {
                year: year, name: name, sm: sm, pm: pm, address: address, city: city, state: state, pincode: pincode, department: department, dob: dob,
                fathername: fathername, focc: focc, mothername: mothername, mocc: mocc, accno: accno, adharno: adharno, community: community, bloodg: bloodg, sslc: sslc, hsc: hsc, admission: admission, join: join
            }, (err, result) => {
                if (err) {
                    console.log(err);
                } else if (!err) {
                    console.log(result);
                    db.query("SELECT * FROM details  WHERE email=?", [email], async (err, result) => {
                        if (err) throw err

                        console.log(result[0].id)


                        if (result[0].id) {
                            db.query('SELECT * FROM details WHERE id=?', [result[0].id], (err, rows) => {

                                if (!err) {

                                    res.render('userprofile', { rows });
                                }
                            })
                        }
                    })




                }
            })
        }
        })
}
