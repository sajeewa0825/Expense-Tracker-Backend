const mongoose = require('mongoose');
const validator = require('validator');
const addIncome = async (req, res) => {

    const { income, remark } = req.body;
    console.log(income, remark);
    const userModel = mongoose.model('user');
    const transactionModel = mongoose.model('transaction');

    if (!income) throw "Income is required";
    if (!remark) throw "Remark is required";
    if (remark.length < 5) throw "Remark should be more than 5 characters";

    if (!validator.isNumeric(income.toString())) throw "Income should be numeric";
    if(income < 0) throw "Income should be greater than 0";

    await transactionModel.create({
        user_id: req.user._id,
        amount: income,
        transaction_type: 'income',
        remark: remark
    });

    await userModel.updateOne({
        _id: req.user._id
    }, {
        $inc: {
            balance: income,
        }
    },
        {
            runValidators: true
        });



    res.status(200).json({
        status: 'success',
        message: 'Income added successfully'
    })
};

module.exports = addIncome;