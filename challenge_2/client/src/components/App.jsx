import React from 'react';
import CurrentPrice from './CurrentPrice.jsx';
import HistoricalPrice from './HistoricalPrice.jsx';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <CurrentPrice />
        {/* <HistoricalPrice /> */}
      </Container>
    </div>
  );
};

export default App;