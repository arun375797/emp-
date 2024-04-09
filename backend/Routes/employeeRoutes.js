const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const Employee =require("../models/Employee");
const { userLogin, userData } = require("../controller/employeeController");

// posting user details
router.post("/signup", async (req, res) => {
    try {
      const user = await UserModel.create(req.body);
      res.json(user);
    } catch (err) {
      console.error("Error occurred while signing up:", err);
      res.status(400).json(err);
    }
  });
  
  //login verification
  router.post("/login",userLogin );
   //display the data in home
   router.get("/employees",userData );
  
  
  
 
  module.exports = router;