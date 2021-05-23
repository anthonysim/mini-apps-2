import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';

const App = () => {

  return (
    <Container>
      <SearchBar />
      <Events />
    </Container>
  );
};

export default App;