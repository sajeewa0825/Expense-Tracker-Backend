const mongoose = require("mongoose")

const editTransaction = async (req, res) =>{

    const {t_id, amount,transaction_type,remark} = req.body
    const transactionModel = mongoose.model("transaction")

    const getdata = await transactionModel.findOne({
        _id:t_id
    })

    if(!getdata) throw "not found transaction"

    if(transaction_type){
        if(transaction_type !== "income" && transaction_type !== "expense"){
            throw "invalid transaction type"
        }
    }

    await transactionModel.findOneAndUpdate({
        _id:t_id
    },{
        amount,
        transaction_type,
        remark
    },
   {
        runValidators: true
    })
    
    res.status(200).json({
        status:"succesfully updated"
    })
}

module.exports = editTransaction;