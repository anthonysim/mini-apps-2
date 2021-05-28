import React from 'react';
import Home from './Home.jsx';
import CurrentPrice from './CurrentPrice.jsx';
import LastMonth from './LastMonth.jsx';
import ThreeMonth from './ThreeMonth.jsx';
import Error from './Error.jsx';
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
          <Link to="/last-month">Last 30 Days</Link>
          <Link to="/three-month">Last 3 Months</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/current" component={CurrentPrice} />
          <Route path="/last-month" component={LastMonth} />
          <Route path="/three-month" component={ThreeMonth} />
          <Route path="*" component={Error} />
        </Switch>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default App;