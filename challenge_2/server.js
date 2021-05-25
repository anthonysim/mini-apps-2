const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// CORS
app.use(cors());

// shows static files react index.html
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/current_price', (req, res) => {
  console.log(req.body)
  res.end();
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} 🐵!`)
})