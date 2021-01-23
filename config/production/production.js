const config = {
    db: {
      uri: process.env.MONGO_DB_URI,
    },
  
    // JWT Secret
    jwt: {
      secret: process.env.JWT_SECRET,
      tokenExpirePeriod: '365d', // 7 day
    },
    // NODE ENV VARIABLES
  
    PORT: process.env.NODE_PORT,
  
  };
  
  module.exports = config;
  