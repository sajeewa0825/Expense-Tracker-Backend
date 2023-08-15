const express = require("express");
const middleware = require("../../middleware/auth");
const addIncome = require("./controlers/addincome");
const addexpenses = require("./controlers/addexpense");

const transactionRoutes = express.Router() 

// Routes
transactionRoutes.use(middleware)

transactionRoutes.post("/addincome",addIncome)
transactionRoutes.post("/expenses",addexpenses)

module.exports = transactionRoutes