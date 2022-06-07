const express = require("express");
const authController=require("../controllers/auth")
const router =express.Router();
router.get("/announcement",function(req,res){
    res.render("announce")
})
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
router.get("/success",(req,res)=>{
    res.render("success")
})
router.get("/fail",(req,res)=>{
    res.render("fail")
})
router.get("/adminregister",(req,res)=>{
    res.render("register")
})

router.post("/adminregister",authController.adminregister)
// router.get("/deleteuser/:id",(req,res)=>{
//     res.render("data");
// })
router.get("/program/:id",authController.program);
router.get("/deleteuser/:id",authController.deleteuser);
router.get("/view/:id",authController.view);
router.get("/edituser/:id",authController.edituser);
router.post("/edituser/:id",authController.edit);
router.get("/semster/:id",authController.semform);
router.post("/semster/:id",authController.sem);
router.get("/result/:id",authController.result);
router.get("/result2/:id",authController.result2);
router.get("/result3/:id",authController.result3);
router.get("/result4/:id",authController.result4);
router.get("/result5/:id",authController.result5);
router.get("/result6/:id",authController.result6);
router.get("/result7/:id",authController.result7);
router.get("/result8/:id",authController.result8);

module.exports=router;