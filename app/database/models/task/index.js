const mongoose = require('mongoose');
const { Schema } = mongoose;
const Project = require('../project')

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    taskCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    project: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Project'
        }
    ],
    duration: {
        type: Number
    },
    BillableHrs: {
        type: Number
    }
},
{
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;