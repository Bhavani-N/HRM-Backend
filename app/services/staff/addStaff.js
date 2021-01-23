const { Staff } = require('../../database');

async function addStaffService(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const configuration = new Staff(data);
      const result = await configuration.save();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  addStaffService,
};
