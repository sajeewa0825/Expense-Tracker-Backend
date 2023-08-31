const mongoose = require('mongoose');

const gettransaction = async (req, res) => {

    const transactionModel = mongoose.model('transaction');

    const transaction = await transactionModel.find({
        user_id:  req.user._id,
        ...req.query // get end point additonal data ex- http://localhost:3000/api/transaction/gettransaction?transaction_type=expense
    })

    res.status(200).json({
        status: 'success',
        data: transaction
    })
}

module.exports = gettransaction;