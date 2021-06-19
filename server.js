const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

// const indexRoute = require('./routes/router-index');
const httpPort = process.env.PORT || 8080;

connectDB().then();

// init the app
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/', indexRoute);
app.get('/', (req, res) => {
  res.send('app is working');
});

app.listen(httpPort, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is alive on port: ${httpPort} running as: ${process.env.NODE_ENV}`,
  );
});

module.exports = app;
