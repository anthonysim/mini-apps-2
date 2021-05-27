import React from 'react';
import Home from './Home.jsx';
import CurrentPrice from './CurrentPrice.jsx';
import OneMonthPrice from './OneMonthPrice.jsx';
import ThreeMonthPrice from './ThreeMonthPrice.jsx';
import { Container } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import '../styling/styles.css'


const App = () => {
  return (
    <div>
      <Container>
        <br />
        <div className="links d-flex justify-content-center">
          <Link id="firstLink" to="/">Home</Link>
          <Link to="/current">Current</Link>
          <Link to="/one-month">1 Month Price</Link>
          <Link to="/three-month">3 Month Price</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/current" component={CurrentPrice} />
          <Route exact path="/one-month" component={OneMonthPrice} />
          <Route exact path="/three-month" component={ThreeMonthPrice} />
        </Switch>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default App;