const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./src/services/routes/index.routes');

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', router)

module.exports = app;
