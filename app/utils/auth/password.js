const bcrypt = require('bcryptjs');

const saltRounds = bcrypt.genSaltSync(10);

async function hash(passWord) {
  if (!passWord) {
    const error = TypeError('Password Should Not Be Empty');
    error.status = 400;
    throw error;
  }
  const value = await bcrypt.hashSync(passWord, saltRounds);

  return value;
  // This will return promise..
}

async function match(plainPassword, hashedPassword) {
  if (!plainPassword || !hashedPassword) {
    const error = TypeError('Password/Hash Should Not Be Empty');
    error.status = 400;
    throw error;
  }

  const value = await bcrypt.compareSync(plainPassword, hashedPassword);

  return value; // This will return promise..
}

module.exports = {
  hash,
  match,
};
