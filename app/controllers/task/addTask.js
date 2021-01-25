const Task = require('../../database/models/task/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.addTask = catchAsync(async (req, res, next) => {
    const result = await Task.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: result
        }
    });
});