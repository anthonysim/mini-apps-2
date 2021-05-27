const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const axios = require('axios');

// cors, static files, and middleware for database
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// shows static files react index.html
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// GET Request for current price
app.get('/current', async (req, res) => {
  try {
    let request = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        let bitcoinData = {};
        bitcoinData.time = res.data.time;
        bitcoinData.price = res.data.bpi.USD
        // bitcoinData.float = res.data.bpi.USDz.rate_float;

        return bitcoinData;
      })
    res.json(request);

  } catch (err) {
    console.error(err);
    res.end();
  }
})

// Server Connection
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} 🐵!`)
})