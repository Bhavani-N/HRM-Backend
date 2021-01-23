const mongoose = require('mongoose');
const Schema = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true],
        unique: true,
        trim: true,
    },
    status: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;