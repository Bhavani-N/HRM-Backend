const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const options = {
    timestamps: true
};

// const loginActivitySchema = new Schema({
//     status: String,
//     loggingTime: Date,

// }, options);

const staffSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: {
    countryCode: { type: Number },
    mobile: { type: Number },
  },
  username: {
    type: String,
  },
  gender: { type: String, enum: ['male', 'female', 'others'] },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String },
  isEmailVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  isDelete: { type: Boolean, default: false },
  employeeId: { type: String },
  role: { type: String, enum: ['admin', 'HR', 'Employee'] },
  profileImage: { type: String },
  // loginActivity: [loginActivitySchema],
  access: {
    type: String,
    enum: ['Full-Access', 'Partial-Access'],
  },
}, options);

staffSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12)
  next();
});

staffSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;