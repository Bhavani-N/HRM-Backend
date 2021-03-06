const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Staff = require('./../../database/models/staff/index');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');

const signToken = id => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (staff, statusCode, res) => {
  const token = signToken(staff._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
  staff.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { 
        staff
    }
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newStaff = await Staff.create(req.body);
  createSendToken(newStaff, 201, res);
});


exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if  (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  const staff = await Staff.findOne({ email }).select('+password');

  if (!staff || !(await staff.correctPassword(password, staff.password))) { 
    return next(new AppError('Incorrect email or password', 401));
  }
  createSendToken(staff, 200, res);

});
