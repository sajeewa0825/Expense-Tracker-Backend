const express = require("express");
const middleware = require("../../middleware/auth");
const addIncome = require("./controlers/addincome");
const addexpenses = require("./controlers/addexpense");
const gettransaction = require("./controlers/gettransaction");

const transactionRoutes = express.Router() 

// Routes
transactionRoutes.use(middleware)

transactionRoutes.post("/addincome",addIncome)
transactionRoutes.post("/expenses",addexpenses)
transactionRoutes.get("/gettransaction",gettransaction)

module.exports = transactionRoutes