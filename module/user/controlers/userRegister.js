const register = (req, res)=>{

    res.status(200).json({
        status:"succesfull",
        massage:"user succesfull added"
    })
}

module.exports = register