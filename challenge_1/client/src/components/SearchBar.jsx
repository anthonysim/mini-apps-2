import React, { Component, useState, useEffect } from 'react';
import { Form, Button, Dropdown, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
import axios from 'axios';



const SearchBar = () => {
  const [values, setValues] = useState({ year: '', keyword: '' });
  const { searchedReducer: data, dataFoundReducer: dataFound } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let url = `http://localhost:3000/events/?date_like=${values.year}`;

    dispatch(fetchData(url));
    setValues({ year: '', keyword: '' });
  }

  return (
    <div>
      <br />
      {dataFound === true ? <h1 className="text-center text-danger">No Results!</h1> : <h1 className="text-info text-center">Historical Events Finder</h1>}
      <br />

      <Form onSubmit={searchHandler}>
        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              value={values.year}
              onChange={handleInputChange}
              name="year"
              placeholder="type in a year..."
            />
          </Form.Group>
        </Form.Row>

        <Button
          type="submit"
          variant="info"
          size="lg"
          block
        >
          Search
        </Button>
      </Form>
    </div>
  );
};


export default SearchBar;