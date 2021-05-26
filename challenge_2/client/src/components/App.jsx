import React from 'react';
import CurrentPrice from './CurrentPrice.jsx';
import HistoricalPrice from './HistoricalPrice.jsx';
import { Container } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';

import LineChart from './LineChart.jsx';


const App = () => {
  return (
    <div>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/today">Current Price</Link>
        <Link to="/one-month">1 Month Price</Link>
        <Link to="/three-months">3 Month Price</Link>

        <Switch>
          <Route exact path="/" component={CurrentPrice} />
          <Route exact path="/one-month" component={HistoricalPrice} />
          <Route exact path="/three-months" component={LineChart} />
        </Switch>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default App;