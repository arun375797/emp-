const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const Employee =require("../models/Employee");
const jwt = require("jsonwebtoken");
const { adminSignup, adminLogin, employeeDataSave, employeeEdit, employeeDelete, employeeDataPrefill } = require("../controller/adminController");
// Admin signup
router.post("/admin/signup",adminSignup );
  // Admin login
   router.post("/admin/login",adminLogin );
  //employee data saving
  router.post("/employees",employeeDataSave );

  //crud
  router.put("/employees/:id", employeeEdit);

  // Delete a specific employee by ID
  router.delete("/employees/:id",employeeDelete);
  // Get employee data by ID
  router.get("/employees/:id",employeeDataPrefill );
  
  module.exports = router;