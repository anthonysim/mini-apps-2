import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


const ThreeMonth = () => {

  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={{ color: 'rgba(75, 192, 192, 1)' }}>3 Month Bitcoin Price</h1>

      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Bitcoin Price - 3 Months',
            data: [12, 19, 3, 5, 2, 3],
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