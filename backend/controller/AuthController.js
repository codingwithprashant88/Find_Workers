const express = require("express");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User Already Exist, You Can Login", success: false });
    }

    const createUser = new User({ name, email, password });
    createUser.password = await bcrypt.hash(password, 10);
    await createUser.save();
    res.status(201).json({ message: "Sign-up SuccessFully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Servar Error:", success: false });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errorMsg = "Auth Failed Email or Password Is Wrong";
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    //client    // data base
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res.status(403).json({ message: errorMsg, success: false });
    }


     const payLoad = {
       user:{
        email:user.email,
        id:user._id
       }
     }
    
    const jwtToken = jwt.sign(
       //decript
     payLoad,
      process.env.JWT_SECRET,
      // { expiresIn: "24h" },
    );

    res.status(200).json({ message: "Login SuccessFully", success: true, jwtToken, email, name:user.name });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Servar Error:", success: false });
  }
};

module.exports = { Signup, Login};
