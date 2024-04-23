const jwt = require ('jsonwebtoken')
const User = require ('../models/UsersModel.js')
const auth = async (req,res,next) => {
    const {authorization} = req.headers
    
    if (!authorization) {
        
        req.user = null
        next()
        return
    }
    const token = authorization.split(' ')[1]
    try {
        const {_id} = jwt.verify(token,process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
    }
    catch(error) {
        console.log(error)
        return res.status(401).json({error: 'Authorization token required'})
    }
}

module.exports = auth