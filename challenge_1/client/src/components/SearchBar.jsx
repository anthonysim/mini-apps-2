import React, { Component, useState, useEffect } from 'react';
import { Form, Button, Dropdown, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
import axios from 'axios';


const SearchBar = () => {
  const [values, setValues] = useState({ year: '', keyword: '' })
  const { searchedReducer: data, dataFoundReducer: dataFound } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const searchHandler = async () => {
    if (!values.year || !values.keyword) {
      alert('Please type in years & keyword!');

    } else {
      let url = `http://localhost:3000/events/?date_like=${values.year}&description_like=${values.keyword}`;

      await dispatch(fetchData(url));
      setValues({ year: '', keyword: '' });
    }
  }

  return (
    <div>
      <br />
      {dataFound === true ? <h1 className="text-center text-danger">No Results!</h1> : <h1 className="text-info text-center">Historical Events Finder</h1>}
      <br />
      <br />
      <Form>
        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              value={values.year}
              onChange={handleInputChange}

              name="year"
              placeholder="year"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Keyword</Form.Label>
            <Form.Control
              type="text"
              value={values.keyword}
              onChange={handleInputChange}
              name="keyword"
              placeholder="keyword"
            />
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