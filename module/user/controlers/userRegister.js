const mongoose = require("mongoose");
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

    //save data
    await userModel.create({
        name:name,
        email:email,
        password:password,
        balance:balance
    })

    res.status(200).json({
        status:"succesfull",
        massage:"user succesfull added"
    })
}

module.exports = register