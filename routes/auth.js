const express = require('express')
const {User,  generateAuthToken} = require('../models/users')
const bcrypt = require('bcryptjs')
const Joi = require('joi')

const router = express.Router()

//Log In a user
router.post('/logIn' , async(req, res) => {
    try {
        const {email , password} = req.body
        
        const {error} = validateUser(req.body);
        if(error) return res.status(400).send(error.details[0].message)
    
        const user = await User.findOne({email})
        if(!user) return res.status(400).send('Email or password is invalid')
    
        const validPassword = await bcrypt.compare(password , user.password)
        if(!validPassword) return res.status(400).send('Email or password is invalid')

        const token = user.generateAuthToken()
        res.send({token , user: {name: user.name, email: user.email}})
    } 
    catch (error) {
       console.error(error.message)
       res.status(500).send('Internal server error')    
    }
})

function validateUser(user){
    const schema = Joi.object({
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(3).max(255).required()
    })
    return schema.validate(user)
} 

module.exports = router