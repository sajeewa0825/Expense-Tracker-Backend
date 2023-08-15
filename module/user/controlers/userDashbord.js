const mongoose = require('mongoose');

const dashbord = async (req, res) => {
    const userModel = mongoose.model('user');

    const user = await userModel.findById(req.user._id).select('-password'); //select('-password') to not show password in response

    res.status(200).json({
        status: 'success',
        data:user
    })
};

module.exports= dashbord;