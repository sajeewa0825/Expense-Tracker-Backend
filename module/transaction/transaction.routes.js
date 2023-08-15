const express = require("express");
const middleware = require("../../middleware/auth");
const addIncome = require("./controlers/addincome");

const transactionRoutes = express.Router() 

// Routes
transactionRoutes.use(middleware)

transactionRoutes.post("/addincome",addIncome)

module.exports = transactionRoutes