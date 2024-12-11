const jwt = require('jsonwebtoken')

exports.auth = function(req, res, next){
    try {
        const token = req.header('x-auth-token')
        if(!token) return res.status(401).send("Access denied")
            
        const decoded = jwt.verify(token , process.env.jwtPrivateKey)
        req.user =  decoded
        next()
    } catch (error) {
        console.error(error.message)
        res.status(403).send('Invalid token')
    }
}