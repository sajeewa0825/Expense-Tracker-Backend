const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwtManager = require('../../../manager/jwtmanager');
const nodemailer = require("nodemailer");


const register = async (req, res)=>{

    const {name, email, password, balance, confrompassword} = req.body
    const userModel = mongoose.model("user");

    //validation
    if(!name) throw "name is required";
    if(!email) throw "email is required";
    if(!password) throw "password is required";
    if(password.length < 6) throw "password must be 6 character long";
    if(!balance) throw "balance is required";
    if(!confrompassword) throw "confrom password is required";
    if(password !== confrompassword) throw "password and confrom password is not match";

    const checkemail = await userModel.findOne({email:email})
    if(checkemail) throw "email is already exist";

    const hash = await bcrypt.hash(password, 10);

    //save data
    const registerUser = await userModel.create({
        name:name,
        email:email,
        password:hash,
        balance:balance
    })

    const accessToken = jwtManager(registerUser);

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "97ca5b63974947",
          pass: "84229e0fae4b7a"
        }
      });

    await transport.sendMail({
        to:email,
        from:"info@expensive.com",
        text:"welocme to the expenses track app",
        subject:"welcome"
    })

    res.status(200).json({
        status:"succesfull",
        massage:"user succesfull added",
        accessToken:accessToken
    })
}

module.exports = register