const express = require('express');
const router = express.Router();

const { addProject, deleteProject, getProject, updateProject } = require('../../controllers/project');

router
    .route('/')
    .post(addProject.addProject)
    .get(getProject.getAllProjects);

router
    .route('/:id')
    .get(getProject.getProject)
    .patch(updateProject.updateProject)
    .delete(deleteProject.deleteProject)

module.exports = router;