const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const userModel = mongoose.model('user');
    const {email, password} = req.body;

    const user = await userModel.findOne({email:email})
    if(!user) throw "user not found";

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) throw "invalid email or password";

    const token = jwt.sign({
        _id:user._id,
        name:user.name,
    }, process.env.JWT_SECRET);

    res.status(200).json({
        status:"success",
        message: 'Login successful',
        token:token
    });
};

module.exports = login