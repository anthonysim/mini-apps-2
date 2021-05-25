const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// CORS
app.use(cors());

// shows static files react index.html
app.use(express.static(path.join(__dirname, 'public')));

// routes
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} 🐵!`)
})