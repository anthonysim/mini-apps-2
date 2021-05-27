import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';


const LastMonth = () => {
  const [lastMonth, setLastMonth] = useState({ labels: [], prices: [] });
  // console.log(lastMonth)

  // componentDidMount
  useEffect(async () => {
    try {
      let res = await axios.get('http://localhost:3000/last-month');
      const labels = Object.keys(res.data);
      const prices = Object.values(res.data);

      setLastMonth({ labels, prices });

    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={{ color: 'rgba(75, 192, 192, 1)' }}>Last 30 Days Bitcoin Price</h1>
      <Line
        data={{
          labels: lastMonth.labels,
          datasets: [{
            label: 'Bitcoin Price - 1 Months',
            data: lastMonth.prices,
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


export default LastMonth;
