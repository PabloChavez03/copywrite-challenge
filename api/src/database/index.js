const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

const connDB = mongoose
  .connect(MONGO_URI)
  .then((db) => {
    console.log(`Database ${db.connection.name} mounted`);
  })
  .catch((err) => new Error(err));

module.exports = connDB;