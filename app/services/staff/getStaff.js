const { Staff } = require('../../database');

async function getSingleStaffService(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Staff.find(query);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}