
const dashbord = async (req, res) => {

    res.status(200).json({
        status: 'success',
        message: 'Welcome to the dashboard'
    })
};

module.exports= dashbord;