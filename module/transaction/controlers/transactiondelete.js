const mongoose = require("mongoose");
const validator = require("validator")


const deleteTransaction = async (req, res) => {
    const transactionModel = mongoose.model("transaction")
    const userModel = mongoose.model("user");
    const { t_id } = req.params

    const gettransaction = await transactionModel.findOne({
        _id: t_id
    })

    if (!validator.isMongoId(t_id.toString())) throw "provide valid id"

    if (!gettransaction) throw "trans action not found"

    if (gettransaction.transaction_type == "income") {
        await userModel.updateOne({
            _id: gettransaction.user_id
        }, {
            $inc: {
                balance: gettransaction.amount * -1,
            }
        },
            {
                runValidators: true
            });
    } else {
        await userModel.updateOne({
            _id: gettransaction.user_id
        }, {
            $inc: {
                balance: gettransaction.amount,
            }
        },
            {
                runValidators: true
            });
    }

    await transactionModel.deleteOne({
        _id:t_id
    })

    res.status(200).json({
        status: "succesfully",
        message: "Transaction deleted"
    })
}

module.exports = deleteTransaction;