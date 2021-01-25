const Task = require('../../database/models/task/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.updateTask = catchAsync(async (req, res, next) => {
  const result = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!result) {
    return next(new AppError('No document found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      data: result
    }
  });
});