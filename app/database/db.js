const mongoose = require('mongoose');

const config = require('../../config/production/production');

const dbURL = config.db.uri;

async function connectionDb() {
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/HRM', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    );
    console.log('Succesfully Connected to DB', dbURL);
  } catch (error) {
    console.log('Database Connection Failed');
    process.exit(1);
  }
}

module.exports = { connectionDb };