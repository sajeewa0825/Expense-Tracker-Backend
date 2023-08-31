const express = require("express");
const middleware = require("../../middleware/auth");
const addIncome = require("./controlers/addincome");
const addexpenses = require("./controlers/addexpense");
const gettransaction = require("./controlers/gettransaction");
const deletedtransaction = require("./controlers/transactiondelete");

const transactionRoutes = express.Router() 

// Routes
transactionRoutes.use(middleware)

transactionRoutes.post("/addincome",addIncome)
transactionRoutes.post("/expenses",addexpenses)
transactionRoutes.get("/gettransaction",gettransaction)
transactionRoutes.delete("/:t_id",deletedtransaction)

module.exports = transactionRoutes