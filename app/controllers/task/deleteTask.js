const Task = require('../../database/models/task/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.deleteTask = catchAsync(async(req, res, next) => {

    const result = await Task.findByIdAndDelete(req.params.id);

    if(!result) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null
    });
});


