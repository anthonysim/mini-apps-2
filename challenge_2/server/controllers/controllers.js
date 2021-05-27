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

exports.getLastThreeMonth = async (req, res) => {

}




// https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05