import React from 'react';
import { Line } from 'react-chartjs-2';


const ThreeMonthPrice = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={{ color: 'rgba(54, 162, 235, 1)' }}>3 Month Bitcoin Price</h1>

      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Bitcoin Price - 3 Months',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1.5,
          }]
        }}
        height={200}
        width={600}
      />
    </div>
  );
};


export default ThreeMonthPrice;