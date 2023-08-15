const express = require("express");
const userRegister = require("./controlers/userRegister")
const userLogin = require("./controlers/userLogin")

const userRoutes = express.Router() 

// Routes
userRoutes.post("/register",userRegister)
userRoutes.post("/login",userLogin)

module.exports = userRoutes