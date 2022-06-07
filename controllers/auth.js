const mysql = require("mysql");

const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs");

const multer = require("multer");

const path=require("path");

const fileUpload=require("express-fileupload")

const exphbs = require('express-handlebars'); // updated to 6.0.X


const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.program=(req,res)=>{
    db.getConnection((err, connection) => {
        if (err) throw err
        let id = req.params.id;
        connection.query("select * from details where Id=?", [id], (err, rows) => {
            connection.release();
            if (!err) {
    res.render("program",{rows})
            }
            else{
                console.log("bad");
            }
        })
    })
}

exports.result=(req,res)=>{
    let cid=req.params.id

db.query("select * from semster1 where cid=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result2=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster2 where cid2=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result3=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster3 where cid3=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result4=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster4 where cid4=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result5=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster5 where cid5=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result6=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster6 where cid6=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result7=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster7 where cid7=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result8=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster8 where cid8=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
exports.result2=(req,res)=>{
    let cid=req.params.id
db.query("select * from semster2 where cid2=?",[cid],(err,row)=>{
if(err) throw err
res.render("result",{row});
})
}
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
    
    let {mark,Exam,semster,sub5,sub6,sub7,sub8}=req.body;
     let cid=req.params.id
      console.log(mark)
    var i=0;
    var subject=["HS5151-TechnicalEnglish", "MA5158-EngineeringMathematics I", "PH5151-Engineering Physics", "CY5151-Engineering Chemistry", "GE5153-Problem Solving and Python Programming"]
    var subject2=["HS5251-Professional Communication","MA5252-Engineering Mathematics II","IT5201-Information Technology Essentials","EE5251-Basics of Electrical and Electronics Engineering","GE5151-Engineering Graphics"]
    var subject3=["MA5302-Discrete Mathematics","IT5301-Digital Logic and Design","IT5352 Programming and Data Structures","IT5351-Database Management Systems","IT5302-Software Engineering"]
    var subject4=["GE5251-Environmental Sciences","IT5401-Object OrientedProgramming and Advanced Data Structures","IT5402-Design and Analysis of Algorithms","IT5451-Computer Architecture","IT5403-Operating Systems"]
    var subje5=["IT5502-Compiler Engineering","IT5551-Computer Networks","IT5501-Web Technologies"]
    var subje6=["IT5601-Embedded Systems and Internet of Things","IT5602-Data Science and Analytics","IT5603-Distributed and Cloud Computing"]
    var subje7=["IT5701-Artificial Intelligence","IIT5702-Mobile Computing","IT5703-Cryptography and Security"]
    var subje8=[]
    let len=subject.length;
    var subject6=subje6.concat(sub6)
    var subject5= subje5.concat(sub5) 
    var subject7=subje7.concat(sub7)
    var subject8= subje8.concat(sub8)   
    
    if(Exam=="cia1"&&semster=="sem1"){
    for(i=0;i<len;i++){
    db.query("insert into semster1 (subjectname,cia1,cid) values(?,?,?)",[subject[i],mark[i],cid],(err,res)=>{
       
     if(err){
            res.render("fail")
            console.log(err)
        }
    })
   
}
mark=[];
res.render("success")


}
else if(Exam=="cia2"&&semster=="sem1"){
    
    for(i=0;i<len;i++){
        db.query("update semster1 set cia2=? where subjectname=? and cid=?",[mark[i],subject[i],cid],async(err,res)=>{   
         if(err){
               console.log(fail)
               res.render("fail")
            }
        })
    
        
    }   
    mark=[];
    res.render("success")


}else if(Exam=="modal"&&semster=="sem1"){
    
    for(i=0;i<len;i++){
        db.query("update semster1 set modal=? where subjectname=? and cid=?",[mark[i],subject[i],cid],async(err,res)=>{
            
         if(err){
                
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem1"&&semster=="sem1"){
 for(i=0;i<len;i++){
        db.query("update semster1 set semster=? where subjectname=? and cid=?",[mark[i],subject[i],cid],async(err,res)=>{
            
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")

}

// semster 2
if(Exam=="cia1"&&semster=="sem2"){
    for(i=0;i<subject2.length   ;i++){
    db.query("insert into semster2 (subjectname,cia1,cid2) values(?,?,?)",[subject2[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    res.render("success")
mark=[];

}
else if(Exam=="cia2"&&semster=="sem2"){    
    for(i=0;i<subject2.length   ;i++){
        db.query("update semster2 set cia2=? where subjectname=? and cid2=?",[mark[i],subject2[i],cid],async(err,res)=>{
            
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="modal"&&semster=="sem2"){
    for(i=0;i<subject2.length   ;i++){
        db.query("update semster2 set modal=? where subjectname=? and cid2=?",[mark[i],subject2[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem2"&&semster=="sem2"){       
    for(i=0;i<subject2.length   ;i++){
        db.query("update semster2 set semster=? where subjectname=? and cid2=?",[mark[i],subject2[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}
//    semster 3
console.log(semster)
console.log(Exam)
if(Exam=="cia1"&&semster=="sem3"){
    console.log("hi")
    for(i=0;i<subject3.length;i++){
    db.query("insert into semster3 (subjectname,cia1,cid3) values(?,?,?)",[subject3[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    res.render("success")
mark=[];

}
else if(Exam=="cia2"&&semster=="sem3"){    
    for(i=0;i<subject3.length;i++){
        db.query("update semster3 set cia2=? where subjectname=? and cid3=?",[mark[i],subject3[i],cid],async(err,res)=>{
            
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="modal"&&semster=="sem3"){
    for(i=0;i<subject3.length;i++){
        db.query("update semster3 set modal=? where subjectname=? and cid3=?",[mark[i],subject3[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem3"&&semster=="sem3"){       
    for(i=0;i<subject3.length;i++){
        db.query("update semster3 set semster=? where subjectname=? and cid3=?",[mark[i],subject3[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
   
}
// semster 4
if(Exam=="cia1"&&semster=="sem4"){
    for(i=0;i<subject4.length;i++){
    db.query("insert into semster4 (subjectname,cia1,cid4) values(?,?,?)",[subject4[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")


}
else if(Exam=="cia2"&&semster=="sem4"){    
    for(i=0;i<subject4.length;i++){
        db.query("update semster4 set cia2=? where subjectname=? and cid4=?",[mark[i],subject4[i],cid],async(err,res)=>{
            
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
   
}else if(Exam=="modal"&&semster=="sem4"){
    for(i=0;i<subject4.length;i++){
        db.query("update semster4 set modal=? where subjectname=? and cid4=?",[mark[i],subject4[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
   
}else if(Exam=="sem2"&&semster=="sem4"){       
    for(i=0;i<subject4.length;i++){
        db.query("update semster4 set semster=? where subjectname=? and cid4=?",[mark[i],subject4[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
 
}
// semster5
if(Exam=="cia1"&&semster=="sem5"){
    for(i=0;i<subject5.length;i++){
    db.query("insert into semster5 (subjectname,cia1,cid5) values(?,?,?)",[subject5[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")


}
else if(Exam=="cia2"&&semster=="sem5"){    
    for(i=0;i<subject5.length;i++){
        db.query("update semster5 set cia2=? where subjectname=? and cid5=?",[mark[i],subject5[i],cid],async(err,res)=>{

              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="modal"&&semster=="sem5"){
    for(i=0;i<subject5.length;i++){
        db.query("update semster5 set modal=? where subjectname=? and cid5=?",[mark[i],subject5[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem2"&&semster=="sem5"){       
    for(i=0;i<subject5.length;i++){
        db.query("update semster5 set semster=? where subjectname=? and cid5=?",[mark[i],subject5[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success");

}
// semster 6
if(Exam=="cia1"&&semster=="sem6"){
    for(i=0;i<subject6.length;i++){
    db.query("insert into semster6 (subjectname,cia1,cid6) values(?,?,?)",[subject6[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")


}
else if(Exam=="cia2"&&semster=="sem6"){    
    for(i=0;i<subject6.length;i++){
        db.query("update semster6 set cia2=? where subjectname=? and cid6=?",[mark[i],subject6[i],cid],async(err,res)=>{
            
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="modal"&&semster=="sem6"){
    for(i=0;i<subject6.length;i++){
        db.query("update semster6 set modal=? where subjectname=? and cid6=?",[mark[i],subject6[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem2"&&semster=="sem6"){       
    for(i=0;i<subject6.length;i++){
        db.query("update semster6 set semster=? where subjectname=? and cid6=?",[mark[i],subject6[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")

}
// semster 7
if(Exam=="cia1"&&semster=="sem7"){
    for(i=0;i<subject7.length;i++){
    db.query("insert into semster7 (subjectname,cia1,cid7) values(?,?,?)",[subject7[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    res.render("success")
mark=[];

}
else if(Exam=="cia2"&&semster=="sem7"){    
    for(i=0;i<subject7.length;i++){
        db.query("update semster7 set cia2=? where subjectname=? and cid7=?",[mark[i],subject7[i],cid],async(err,res)=>{
            
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="modal"&&semster=="sem7"){
    for(i=0;i<subject7.length;i++){
        db.query("update semster7 set modal=? where subjectname=? and cid7=?",[mark[i],subject7[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem2"&&semster=="sem7"){       
    for(i=0;i<subject7.length;i++){
        db.query("update semster7 set semster=? where subjectname=? and cid7=?",[mark[i],subject7[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}
// semster 8
if(Exam=="cia1"&&semster=="sem8"){
    for(i=0;i<subject8.length;i++){
    db.query("insert into semster8 (subjectname,cia1,cid8) values(?,?,?)",[subject8[i],mark[i],cid],(err,res)=>{    
         if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")


}
else if(Exam=="cia2"&&semster=="sem8"){    
    for(i=0;i<subject8.length;i++){
        db.query("update semster8 set cia2=? where subjectname=? and cid8=?",[mark[i],subject8[i],cid],async(err,res)=>{
            
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="modal"&&semster=="sem8"){
    for(i=0;i<subject8.length;i++){
        db.query("update semster8 set modal=? where subjectname=? and cid8=?",[mark[i],subject8[i],cid],async(err,res)=>{  
              if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}else if(Exam=="sem2"&&semster=="sem8"){       
    for(i=0;i<subject8.length;i++){
        db.query("update semster8 set semster=? where subjectname=? and cid8=?",[mark[i],subject8[i],cid],async(err,res)=>{
                if(err){
                console.log(err)
                res.render("fail")
            }
        })
    
    }
    mark=[];
    res.render("success")
    
}

}



exports.adminregister = (req, res) => {
    console.log(req.body)
    const { name, email, password,acode } = req.body;
    
    // db.query("SELECT * FROM admin_login  WHERE acode=?", [acode], async (err, result) => {

        // if (err) {
        // res.send(err)
        // }
        // if (result.length > 0) {
        //     return res.render('register', {
        //         message: "Please valid accesscode"
        //     });

        // } 
       

   

    // })
    db.query("update admin_login SET name=?,email=?,password=? where acode=?", [name,email,password,acode], (err, result) => {
        if (err) {
            return res.render("register",{
                message: "Please valid accesscode"
            })
        }else if(result.length>0){
            return res.render("register",{
                message: "Please valid accesscode"
            })
        }
        
        else if (!err) {
            console.log(result);
            return  res.render("index",{
                message:"hi"
            });
        }
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
    const { email, password } = req.body;

    db.query("SELECT * FROM admin_login  WHERE email=? and password=?", [email,password], (err, result) => {
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
    console.log(req.files)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = "./upload/" + sampleFile.name;
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
    
            db.query("UPDATE details SET name=?, rollno=?, regno=?, email=?, sm=?, pm=?, address=?, city=?, state=?, pincode=?, department=?, dob=?,fathername=?, focc=?, mothername=?, mocc=?, accno=?, adharno=?, community=?, bloodg=?, sslc=?, hsc=?, admission=?, year=? where id=?", [
                name, rollno, regno, email, sm, pm, address, city, state, pincode, department, dob,
                fathername, focc, mothername, mocc, accno, adharno, community, bloodg,sslc,hsc,admission, year,id], (err, result) => {
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
                                }else{
                                    res.send("error")
                                }
                            })
                        }
                    })
                }
            })
        }
 
