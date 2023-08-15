const express = require("express");
const userRegister = require("./controlers/userRegister")
const userLogin = require("./controlers/userLogin")
const userDashbord = require("./controlers/userDashbord")
const middleware = require("../../middleware/auth")

const userRoutes = express.Router() 

// Routes
userRoutes.post("/register",userRegister)
userRoutes.post("/login",userLogin)
userRoutes.use(middleware)
userRoutes.get("/dashbord",userDashbord)

module.exports = userRoutes