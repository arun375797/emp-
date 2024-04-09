const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const Employee = require("./models/Employee");
const adminRoutes=require("./Routes/adminRoutes")
const employeeRoutes=require("./Routes/employeeRoutes")
require('dotenv').config();
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


  app.use("/admin", adminRoutes);
  app.use("/employees", employeeRoutes);




app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
