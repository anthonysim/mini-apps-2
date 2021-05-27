const axios = require('axios');


exports.getCurrent = async (req, res) => {
  try {
    let request = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        let bitcoinData = {};
        bitcoinData.time = res.data.time;
        bitcoinData.price = res.data.bpi.USD;

        return bitcoinData;
      })
    res.json(request);

  } catch (err) {
    console.error(err);
    res.end();
  }
}

exports.getLastMonth = async (req, res) => {
  try {
    let request = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(res => {
        return res.data.bpi;
      })
    res.json(request);

  } catch (err) {
    console.error(err);
    res.end();
  }
}