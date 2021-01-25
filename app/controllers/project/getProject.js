const Project= require('../../database/models/project');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.getProject= catchAsync(async(req, res, next) => {
  let result = await Project.findById(req.params.id); 

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

exports.getAllProjects =  catchAsync(async (req, res, next) => {
  const projects = await Project.find();

  // SEND RESPONSE
  res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
  });
});