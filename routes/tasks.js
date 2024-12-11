const {Task , validatetask} = require('../models/tasks')
const express = require('express')
const {auth} = require('../middleware/auth')
const Joi = require('joi')

const router = express.Router();

//Fetch all tasks
router.get('/tasks' , async(req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1)
        const limit = Math.max(1, parseInt(req.query.limit) || 3)

        const skip = (page-1) * limit

        const tasks = await Task.find().skip(skip).limit(limit)
        res.send({tasks, pagination: {currentPage:page , tasksPerPage: limit }})
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

//Fetch a task by ID
router.get('/tasks/:id', auth, async(req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(404).send('No record found')
        
        res.send(task)
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

//Create a new task
router.post('/tasks', auth, async(req, res) => {
    try {
        const {error} = validatetask(req.body)
        if(error) return res.status(400).send(error.details[0].message)
        
        const { title, description , completed} = req.body
    
        const task = new Task({
            title,
            description,
            completed,
            createdAt: Date.now()
        })
    
        await task.save()
        res.status(201).send(task)
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

//Update an entire task
router.put('/tasks/:id' , auth,  async(req, res) => {
    try {
        const {error} = validatetask(req.body)
        if(error) return res.status(400).send(error.details[0].message)
    
        const { title, description , completed} = req.body
    
        const task = await Task.findByIdAndUpdate(req.params.id, {
            title,
            description,
            completed
        }, 
        {new: true})
        if(!task) return res.status(404).send('Task does not exists')
    
            res.status(200).send(task)
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

//Update specific fields of a task
router.patch('/tasks/:id' , auth,  async(req, res) => {
    try {
        const {error} = validatetasks(req.body)
        if(error) return res.status(400).send(error.details[0].message)
    
        const task = await Task.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, 
        {new: true})
        if(!task) return res.status(404).send('Task does not exists')
    
            res.status(200).send(task)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

function validatetasks(task){
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).optional(),
        description: Joi.string().optional(),
        completed: Joi.boolean().optional()
    })
    return schema.validate(task)
} 

//Delete a task by ID
router.delete('/tasks/:id' , auth , async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).send('Task does not exists')
    
        res.send('Deleted the task sucessfully: ', task)
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

module.exports = router