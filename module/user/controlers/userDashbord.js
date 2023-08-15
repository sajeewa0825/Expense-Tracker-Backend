const mongoose = require('mongoose');

const dashbord = async (req, res) => {
    const userModel = mongoose.model('user');
    const transactionModel = mongoose.model('transaction');

    const user = await userModel.findById(req.user._id).select('-password'); //select('-password') to not show password in response

    const transaction = await transactionModel.find({
        user_id:  req.user._id
    }).sort("-createdAt").limit(3);

    res.status(200).json({
        status: 'success',
        data:user,
        transaction
    })
};

module.exports= dashbord;