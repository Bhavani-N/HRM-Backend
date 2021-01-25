const Project = require('../../database/models/project');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.updateProject = catchAsync(async (req, res, next) => {
  const result = await Project.findByIdAndUpdate(req.params.id, req.body, {
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