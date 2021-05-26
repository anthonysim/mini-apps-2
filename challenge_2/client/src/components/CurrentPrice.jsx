import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, ListGroup } from 'react-bootstrap';



const CurrentPrice = () => {
  const [currentPrice, setCurrentPrice] = useState({})

  // useEffect(async () => {
  //   try {
  //     let res = await axios.get('/current_price');
  //     setCurrentPrice(res.data)

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  console.log('state:', currentPrice)
  return (
    <div>
      <Card className="shadow text-center">
        <Card.Header>
          <h1 className="text-center" style={{ color: 'rgba(54, 162, 235, 1)' }}>Current Bitcoin Price</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
      </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>

    </div>
  );
};


export default CurrentPrice;