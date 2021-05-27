import React from 'react';
import Home from './Home.jsx';
import CurrentPrice from './CurrentPrice.jsx';
import LastMonth from './LastMonth.jsx';
import ThreeMonth from './ThreeMonth.jsx';
import { Container } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import '../styling/styles.css'


const App = () => {
  return (
    <div>
      <Container>
        <br />
        <div className="links d-flex justify-content-center">
          <Link to="/">Home</Link>
          <Link to="/current">Current</Link>
          <Link to="/last-month">1 Month Price</Link>
          <Link to="/three-month">3 Month Price</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/current" component={CurrentPrice} />
          <Route exact path="/last-month" component={LastMonth} />
          <Route exact path="/three-month" component={ThreeMonth} />
        </Switch>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default App;