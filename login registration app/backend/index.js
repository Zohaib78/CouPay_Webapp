require("dotenv").config();
//import expess from "express";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//import cors from "cors";
//import mongoose from "mongoose";

//connecting to databae
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/myLoginRegisterDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB conected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);
//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  //fimd present DB or not
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login sucess" });
      } else {
        res.send({ message: "Password did not Match" });
      }
    } else {
      res.send({ message: "Users not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  // res.send("My API register");
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({
            message: "Sucessfully Registered",
          });
        }
      });
    }
  });
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});

// //Routes
// app.get("/", (req, res) => {
//   res.send("My API");
// });

// app.listen(9003, () => {
//   console.log("BE sarted at port 9003");
// });
