const jwt = require('jsonwebtoken');
const config = require('../../../config/production/production');

const {
  secret: jwtSecret,
  tokenExpirePeriod,
} = config.jwt;

async function generate(payLoad, expiry = 3600 * 24 * 365) {
  payLoad.expiresIn = 3600 * 24 * 365;
  const expiresIn = expiry || tokenExpirePeriod;
  const isObject = (typeof payLoad === 'object');

  if (!payLoad) {
    const error = new TypeError('Token Payload Should Not Be Empty');
    throw error;
  }

  if (!isObject) {
    const error = new TypeError('Token Payload Must Be An Object');
    throw error;
  }
  return new Promise((resolve, reject) => {
    jwt.sign(payLoad, jwtSecret, { expiresIn }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
}

async function verifyToken(token) {
  if (!token) {
    const error = new TypeError('Token Should Not Be Empty');
    error.status = 401;
    throw error;
  }

  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if (error) {
        error = new TypeError('Please login to continue!');
        error.status = 401;
        reject(error);
      } else {
        resolve(decodedToken);
      }
    });
  });
}

module.exports = {
  generate,
  verify: verifyToken,
};
