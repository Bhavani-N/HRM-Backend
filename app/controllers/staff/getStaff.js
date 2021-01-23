const Staff = require('../../database/models/staff/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.getStaff = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

exports.getAllStaffs =  catchAsync(async (req, res, next) => {
  const staffs = await Staff.find();

  // SEND RESPONSE
  res.status(200).json({
      status: 'success',
      results: staffs.length,
      data: {
          staffs
      }
  });
});