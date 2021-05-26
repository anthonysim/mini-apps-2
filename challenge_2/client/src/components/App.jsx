import React from 'react';
import CurrentPrice from './CurrentPrice.jsx';
import HistoricalPrice from './HistoricalPrice.jsx';
import { Container } from 'react-bootstrap';


import LineChart from './LineChart.jsx';


const App = () => {
  return (
    <div>
      <Container>

        <br />
        <br />
        <CurrentPrice />
        <LineChart />
        {/* <HistoricalPrice /> */}
      </Container>
    </div>
  );
};

export default App;