const express = require("express");

const mysql = require("mysql");

const bodyParser = require("body-parser");

const dotEnv = require("dotenv");

const multer = require("multer");

const path = require("path")

const fileUpload = require("express-fileupload");

// const exphbs=require("express-handlebars");

dotEnv.config();

const app = express();

app.use(express.static("public"));
app.use(express.static("upload"));
// const handlebars = exphbs.create({ extname: '.hbs',});
// app.engine('.hbs', handlebars.engine);
app.set("view engine", 'hbs');
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})


app.use(express.urlencoded({ extended: true }))

app.use(express.json())

db.connect((err) => {
    if (!err) {
        console.log("successfully connect")
    } else {
        console.log(err)
    }
})


app.use("/", require('./routes/router'));

app.use("/auth", require('./routes/auth'))

app.listen(8080, function () {
    console.log("Hey i am runing in 3000");
})
