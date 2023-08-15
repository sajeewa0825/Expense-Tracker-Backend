const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    const accessToken = jwt.sign({
        _id:registerUser._id,
        name:registerUser.name,
    }, process.env.JWT_SECRET);

    res.status(200).json({
        status:"succesfull",
        massage:"user succesfull added",
        accessToken:accessToken
    })
}

module.exports = register