const express = require('express')
const {User, validateUser,  generateAuthToken} = require('../models/users')
const bcrypt = require('bcryptjs')

const router = express.Router()

//Register a new user
router.post('/signUp' , async(req, res) => {
    try {
        const {name , email , password} = req.body
        
        const {error} = validateUser(req.body);
        if(error) return res.status(400).send(error.details[0].message)
    
        const validEmail = await User.findOne({email})
        if(validEmail) return res.status(400).send('This mail is already registered.')
    
        const user = new User({
            name,
            email,
            password
        })
    
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password , salt)
    
        await user.save()

        const token = user.generateAuthToken()

        res.header('x-auth-token', token).send({id: user._id, name , email})
    } 
    catch (error) {
       console.error(error.message)
       res.status(500).send('Internal server error')    
    }
})

module.exports = router