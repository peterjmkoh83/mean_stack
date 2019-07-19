const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: function(req, res) {
        Task.find({}, function(err, task) {
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", task: task});
            }
        })
    },

    details: function(req,res) {
        
        let id = req.params.id;
        Task.findById({_id: id}, function(err, task) {
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", task: task})
            }
        })
    },

    addTask: function(req,res) {
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed}, function(err, task){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", task: task})
            }
        })
    },

    editTask: function(req,res) {
        Task.findByIdAndUpdate({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description, completed: req.body.completed}}, (err, task)=>{
            if(err) {
                res.json({message:"Error", error: err});
            }
            else {
                res.json({message:"Success", task: task})
            }
        })
    },

    deleteTask: function(req,res) {
        
        Task.findOneAndRemove({_id: req.params.id}, function(err, task) {
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", task: task})
            }
        })
    } 



};