import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';


const ThreeMonth = () => {
  const [threeMonth, setThreeMonth] = useState({ labels: [], prices: [] });
  // console.log(threeMonth)

  // componentDidMount
  useEffect(async () => {
    try {
      let res = await axios.get('http://localhost:3000/three-month');
      console.log(res.data);
      const labels = Object.keys(res.data);
      const prices = Object.values(res.data);

      setThreeMonth({ labels, prices });

    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={{ color: 'rgba(75, 192, 192, 1)' }}>3 Month Bitcoin Price</h1>
      <br />
      <Bar
        data={{
          labels: threeMonth.labels,
          datasets: [{
            label: 'Bitcoin Price - 3 Months',
            data: threeMonth.prices,
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1.5,
          }]
        }}
        height={200}
        width={600}
      />
    </div >
  );
};


export default ThreeMonth;