const express = require("express");

const authController=require("../controllers/auth")
const router =express.Router();



router.post("/login",authController.login)

router.post("/adminlogin",authController.adminlogin)

router.post("/studentdetails",authController.studentdetails)



// router.post("/semster",authController.sem)



module.exports=router;