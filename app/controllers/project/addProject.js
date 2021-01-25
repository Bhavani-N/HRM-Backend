const Project = require('../../database/models/project');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.addProject = catchAsync(async (req, res, next) => {
    const result = await Project.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: result
        }
    });
});