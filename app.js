require('dotenv').config();
require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose')
const errorHandler = require('./handler/errorHandler');
const userRoutes = require('./module/user/user.routes');

const app = express();

mongoose.connect(process.env.MONGO_URL,{}).then( () =>{
  console.log("connection succesfuly");
}).catch((err) =>{
  console.log(err);
} )

require("./model/userModel")

app.use(express.json());
app.use("/api/user",userRoutes)
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});