const express = require('express');
const router = express.Router();

const { addTask, deleteTask, getTask, updateTask } = require('../../controllers/task');

router
    .route('/')
    .post(addTask.addTask)
    .get(getTask.getAllTasks);

router
    .route('/:id')
    .get(getTask.getTask)
    .patch(updateTask.updateTask)
    .delete(deleteTask.deleteTask)


module.exports = router;