const express = require("express");
const userRegister = require("./controlers/userRegister")

const userRoutes = express.Router()

userRoutes.post("/register",userRegister)

module.exports = userRoutes