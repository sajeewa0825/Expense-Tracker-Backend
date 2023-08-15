const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const userModel = mongoose.model('user');
    const {email, password} = req.body;

    const user = await userModel.findOne({email:email})
    if(!user) throw "user not found";

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) throw "invalid email or password";

    res.status(200).json({
        status:"success",
        message: 'Login successful'
    });
};

module.exports = login