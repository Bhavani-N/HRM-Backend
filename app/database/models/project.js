const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true,
    },
    projectCode: {
        type: String,
        required: true
    }
});


const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
