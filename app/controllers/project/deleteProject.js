const Project = require('../../database/models/project');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.deleteProject = catchAsync(async(req, res, next) => {

    const result = await Project.findByIdAndDelete(req.params.id);

    if(!result) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null
    });
});


