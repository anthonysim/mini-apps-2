import React from 'react';
import { Line } from 'react-chartjs-2';


const OneMonthPrice = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={{ color: 'rgba(54, 162, 235, 1)' }}>1 Month Bitcoin Price</h1>

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


export default OneMonthPrice;


   // borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)'
            // ],