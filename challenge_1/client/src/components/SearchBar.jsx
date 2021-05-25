import React, { Component, useState, useEffect } from 'react';
import { Form, Button, Dropdown, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, searchData } from '../actions';
import axios from 'axios';


const SearchBar = () => {
  const [values, setValues] = useState({ year: '', keywords: '' })
  const data = useSelector(state => state.searchedReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchData('http://localhost:3000/events'));
  }, []);

  // console.log('look at me', data)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const searchHandler = () => {
    console.log(values.year)
    console.log(values.keywords)
    setValues({ year: '', keywords: '' });
  }

  return (
    <div>
      <br />
      <h1 className="text-info text-center">Historical Events Finder</h1>
      <br />
      <br />
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              value={values.year}
              onChange={handleInputChange}
              name="year"
              placeholder="Year"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={values.keywords}
              name="keywords"
              placeholder="Keywords" />
          </Form.Group>
        </Form.Row>

        <Button
          onClick={() => searchHandler()}
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