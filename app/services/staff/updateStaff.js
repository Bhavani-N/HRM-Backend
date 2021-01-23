const { Staff } = require('../../database');

async function updateStaffService(query, data) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Staff.findOneAndUpdate(query, data, { new: true });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  updateStaffService,
};
