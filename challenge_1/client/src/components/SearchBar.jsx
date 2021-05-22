import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <div>
      <h1 className="text-info text-center">Historical Events Finder</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="search" placeholder="type to find historical events..." />
        </Form.Group>
      </Form>
      <Button variant="info" size="lg" block>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;