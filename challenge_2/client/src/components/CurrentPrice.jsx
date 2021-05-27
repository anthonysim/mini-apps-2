import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';


const CurrentPrice = () => {
  const [current, setCurrent] = useState({ time: '', price: undefined })
  console.log(current)

  useEffect(async () => {
    try {
      let res = await axios.get('http://localhost:3000/current');
      let currentPrice = res.data.price.rate;

      setCurrent({
        time: res.data.time.updated,
        price: currentPrice.substring(0, currentPrice.length - 2),
      })

    } catch (err) {
      console.error(err);
    }
  }, []);

  const styleOptions = {
    color: 'rgba(54, 162, 235, 1)'
  };

  return (
    <div>
      <br />
      <br />
      <h1 className="text-center" style={styleOptions}>Current Bitcoin Price</h1>
      <br />
      <br />
      <Card className="card shadow p- mb-5 mt-1 bg-white rounded" style={{ width: '18rem' }}>
        <ListGroup variant="flush">

          <h4 className="text-center" style={styleOptions}>Date</h4>
          <ListGroup.Item ><h3 className="text-secondary text-center">{current.time}</h3></ListGroup.Item>


          <h4 className="mt-3 text-center" style={styleOptions}>Current Price</h4>
          <ListGroup.Item ><h3 className="text-secondary text-center">&#36;{current.price}</h3></ListGroup.Item>


        </ListGroup>
      </Card>
    </div>
  );
};


export default CurrentPrice;
