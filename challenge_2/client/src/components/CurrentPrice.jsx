import React, { useState, useEffect } from 'react';
import RequestData from '../__helpers__/requestData.jsx';
import { Card, ListGroup } from 'react-bootstrap';
import { VscLoading } from "react-icons/vsc";
import axios from 'axios';


const CurrentPrice = () => {
  const [current, setCurrent] = useState({ time: '', price: undefined })
  // console.log(current)

  // componentDidMount
  useEffect(() => {
    let res = RequestData('http://localhost:3000/current');

    res.then(data => {
      let price = data.price.rate;

      setCurrent({
        time: data.time.updated,
        price: price.substring(0, price.length - 2),
      })
    })
      .catch(err => console.error(err))
  }, []);

  // react inline styles.
  const styleOptions = {
    color: 'rgba(75, 192, 192, 1)'
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

          {/* Date */}
          <h4 className="text-center" style={styleOptions}>Date</h4>
          <ListGroup.Item ><h3 className="text-secondary text-center">{!current.time ? <VscLoading /> : current.time}</h3></ListGroup.Item>

          {/* Current Price */}
          <h4 className="mt-3 text-center" style={styleOptions}>Current Price</h4>
          <ListGroup.Item ><h3 className="text-secondary text-center">{!current.price ? <VscLoading /> : `$${current.price}`}</h3></ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};


export default CurrentPrice;
