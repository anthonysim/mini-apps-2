import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Home = () => {
  const history = useHistory();

  return (
    <div>
      <br />
      <br />
      <Card className="shadow text-center">
        <Card.Header>
          <h1 className="text-center" style={{ color: 'rgba(54, 162, 235, 1)' }}>
            Cryptocurrency Charting Tool
          </h1>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-primary">Bitcoin Prices</Card.Title>
          <Card.Text className="text-secondary">Please click below to see today's bitcoin price....</Card.Text>
          <Button onClick={() => history.push('/current')} variant="primary">Enter</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};


export default Home;