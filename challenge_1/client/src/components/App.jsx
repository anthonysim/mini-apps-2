import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';

const App = () => {

  return (
    <div>
      <Container>
        <SearchBar />

        <Events />
      </Container>
    </div>
  );
};

export default App;