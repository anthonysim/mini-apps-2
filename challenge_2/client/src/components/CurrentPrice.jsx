import React from 'react';
import axios from 'axios';

const CurrentPrice = () => {

  useEffect(async () => {
    try {
      let res = await axios.get('/current_price');
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">Current Bitcoin Price</h1>
    </div>
  );
};

export default CurrentPrice;