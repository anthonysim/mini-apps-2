import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Home = () => {
  const history = useHistory();

  const styleOptions = {
    color: 'rgba(75, 192, 192, 1)'
  }

  return (
    <div>
      <br />
      <br />
      <Card className="shadow text-center">
        <Card.Header>
          <h1 className="text-center" style={styleOptions}>
            Cryptocurrency Charting Tool
          </h1>
        </Card.Header>
        <Card.Body>
          <Card.Title style={styleOptions}>Bitcoin Prices</Card.Title>
          <Card.Text className="text-secondary">Please click below to see today's bitcoin price....</Card.Text>
          <Button
            onClick={() => history.push('/current')}
            style={{ backgroundColor: 'rgba(75, 192, 192, 1)' }}
            variant="primary">
            Enter
            </Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};


export default Home;