const UserModel = require("../models/User");
const Employee = require("../models/Employee");

exports.userLogin=async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username: username });
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("User is not registered");
      }
    } catch (err) {
      console.error("Error occurred while logging in:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
    
  }
  exports.userData=async (req, res) => {
    try {
      // Fetch all employees from the database
      const employees = await Employee.find();
      // Send the employees data as response
      res.json(employees);
    } catch (error) {
      console.error("Error while fetching employees:", error);
      // Send error response if there's an error
      res.status(500).json({ error: "Internal Server Error" });
    }
  }