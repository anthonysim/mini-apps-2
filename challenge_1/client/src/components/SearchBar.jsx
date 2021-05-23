import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ThemeContextConsumer } from "../themeContext.jsx";


const SearchBar = () => {


  return (
    <ThemeContextConsumer>
      {context => (
        <div>
          <h1>{context.state.value}</h1>
          <br />
          <h1 className="text-info text-center">Historical Events Finder</h1>
          <br />
          <br />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={context.state.handleChange}
                placeholder="find historical events..."
              />
            </Form.Group>
          </Form>
          <Button onClick={context.search} variant="info" size="lg" block>
            Search
      </Button >
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default SearchBar;