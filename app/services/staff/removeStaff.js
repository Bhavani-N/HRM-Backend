const { Staff } = require('../../database');

async function removeStaffService(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Staff.findOneAndDelete(query);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  removeStaffService,
};
