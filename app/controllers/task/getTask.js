const Task = require('../../database/models/task/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.getTask = catchAsync(async(req, res, next) => {
  let result = await Task.findById(req.params.id).populate({
  });

  if(!result) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: result
    }
  });
});

exports.getAllTasks =  catchAsync(async (req, res, next) => {
  const tasks = await Task.find();

  // SEND RESPONSE
  res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: {
        tasks
      }
  });
});