const Staff = require('../../database/models/staff/index');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.addStaff = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined! Please use /signup instead'
    });
};