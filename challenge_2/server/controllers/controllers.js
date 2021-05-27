const { convertMonth } = require('../__helpers__/convertMonth');
const { findMonth } = require('../__helpers__/findMonth');
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
  try {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;

    let firstMonth = convertMonth(month);
    let secondMonth = convertMonth(month - 1);
    let thirdMonth = convertMonth(month - 2);

    let firstDate = `${year}-${firstMonth}-01`;
    let secondDate = `${year}-${secondMonth}-01`;
    let thirdDate = `${year}-${thirdMonth}-01`;

    let request = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${year}-${thirdMonth}-01&end=${year}-${firstMonth}-01`)

      .then(res => {
        let results = findMonth(res.data.bpi, firstDate, secondDate, thirdDate);
        return results;
      })
    res.json(request);

  } catch (err) {
    console.error(err);
    res.end();
  }
}




