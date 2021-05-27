import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


const LastMonth = () => {
  const [current, setCurrent] = useState({ time: '', price: undefined })
  // console.log(current)

  // componentDidMount
  useEffect(() => {
    let res = RequestData('http://localhost:3000/last-month');

    res.then(data => {
      let price = data.price.rate;

      setCurrent({
        time: data.time.updated,
        price: price.substring(0, price.length - 2),
      })
    })
      .catch(err => console.error(err))
  }, []);

  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={{ color: 'rgba(75, 192, 192, 1)' }}>1 Month Bitcoin Price</h1>

      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Bitcoin Price - 1 Months',
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


export default LastMonth;
