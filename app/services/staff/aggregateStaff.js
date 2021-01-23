const { Staff } = require('../../database');

async function aggregateStaffService(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Staff.aggregate(query);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  aggregateStaffService,
};
