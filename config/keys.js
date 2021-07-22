const env = require('dotenv');
env.config();

module.exports = {
  mongoURI: process.env.MONGO_DB_URI,
  secretOrKey: process.env.secret,
};
