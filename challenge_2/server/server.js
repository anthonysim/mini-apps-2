const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const userRouter = require('./routes/routes');
const axios = require('axios');

// cors, static files, and middleware for database
app.use(cors());
app.use(express.json());

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));

// ROUTES
app.use('/', userRouter);

// Server Connection
const PORT = 3000;
app.listen(PORT, () => {
  console.log(path.join(__dirname, '../public'))
  console.log(`Listening on PORT ${PORT} 🐵!`)
})