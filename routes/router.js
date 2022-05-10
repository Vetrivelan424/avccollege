const express = require("express");
const authController=require("../controllers/auth")
const router =express.Router();

router.get("/",function(req,res){
    res.render("index")
});
router.get("/register",function(req,res){
    res.render("register");
});
router.get("/login",(req,res)=>{
    res.render("login")
});
router.get("/adminlogin",(req,res)=>{
    res.render("adminlogin")
})
router.get("/studentdetails",(req,res)=>{
    res.render("studentdetails")
})
router.get("/userprofile",(req,res)=>{
    res.render("userprofile")
})
router.get("/data",(req,res)=>{
    res.render("data")
})

// router.get("/deleteuser/:id",(req,res)=>{
//     res.render("data");
// })
router.get("/deleteuser/:id",authController.deleteuser);
router.get("/view/:id",authController.view);
router.get("/edituser/:id",authController.edituser);
router.post("/edituser/:id",authController.edit);
router.get("/semster/:id",authController.semform);
router.post("/semster/:id",authController.sem);
module.exports=router;