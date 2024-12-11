const Joi = require('joi');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{type: String, minlength: 3, maxlength: 255, required: true},
    description:{type: String},
    completed:{type: Boolean, default: false},
    createdAt:{type: Date, default: Date.now}
})


const Task = mongoose.model('Task', taskSchema);

function validatetask(task){
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        description: Joi.string().optional(),
        completed: Joi.boolean().optional()
    })
    return schema.validate(task)
} 

exports.validatetask = validatetask
exports.Task = Task;