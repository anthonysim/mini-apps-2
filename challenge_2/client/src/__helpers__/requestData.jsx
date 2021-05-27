import axios from 'axios';


const RequestData = async () => {
  try {
    let res = await axios.get('http://localhost:3000/current');
    let currentPrice = res.data.price.rate;

    return res.data;

  } catch (err) {
    console.error(err);
  }
}

export default RequestData;