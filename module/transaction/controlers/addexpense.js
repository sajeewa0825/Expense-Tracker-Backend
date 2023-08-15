const mongoose = require('mongoose');
const validator = require('validator');
const addexpense = async (req, res) => {

    const { expense, remark } = req.body;
    console.log(expense, remark);
    const userModel = mongoose.model('user');
    const transactionModel = mongoose.model('transaction');

    if (!expense) throw "expense is required";
    if (!remark) throw "Remark is required";
    if (remark.length < 5) throw "Remark should be more than 5 characters";

    if (!validator.isNumeric(expense.toString())) throw "expense should be numeric";
    if(expense < 0) throw "expense should be greater than 0";

    await transactionModel.create({
        user_id: req.user._id,
        amount: expense,
        transaction_type: 'expense',
        remark: remark
    });

    await userModel.updateOne({
        _id: req.user._id
    }, {
        $inc: {
            balance: expense * -1,
        }
    },
        {
            runValidators: true
        });



    res.status(200).json({
        status: 'success',
        message: 'expense added successfully'
    })
};

module.exports = addexpense;