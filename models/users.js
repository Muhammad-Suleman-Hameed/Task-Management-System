const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{type: String, minlength: 3, maxlength: 255, required: true},
    email:{type: String, minlength: 7, maxlength: 255, unique: true, required: true},
    password:{type: String, minlength: 3, maxlength: 255, required: true}
})

userSchema.methods.generateAuthToken = function(){
    try {
        const token = jwt.sign({_id: this._id}, process.env.jwtPrivateKey)
        return token 
    } catch (error) {
            console.error(error.message)
            throw new Error("failed token generation")
    }
}

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(3).max(255).required()
    })
    return schema.validate(user)
} 

exports.validateUser = validateUser
//exports.userSchema = userSchema
exports.User = User;