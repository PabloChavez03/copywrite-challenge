const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test";
const PORT = process.env.PORT || 5000;

module.exports = {
  MONGO_URI,
  PORT
}