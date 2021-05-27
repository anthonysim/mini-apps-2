import axios from 'axios';


const RequestData = async (url) => {
  try {
    let res = await axios.get(url);
    return res.data;

  } catch (err) {
    console.error(err);
  }
}

export default RequestData;