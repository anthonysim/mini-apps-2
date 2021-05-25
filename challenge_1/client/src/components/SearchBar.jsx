import React, { Component, useState, useEffect } from 'react';
import { Form, Button, Dropdown, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, searchData } from '../actions';
import axios from 'axios';


const SearchBar = () => {
  const [values, setValues] = useState({ year: '', keywords: '' })
  const data = useSelector(state => state.searchedReducer);
  const dispatch = useDispatch();

  // useEffect(async () => {
  //   await dispatch(fetchData('http://localhost:3000/events'));
  // }, []);

  // console.log('look at me', data)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });

  };

  const searchHandler = async () => {

    if (values.date === '' || values.keywords === '') {
      alert('Please type in years and/or keywords!')
    } else {
      let url = `http://localhost:3000/events/?date_like"=${values.year}&description_like=${values.keywords}`;
      console.log(url)
      // let res = await fetchData(url);
      // console.log(res.data)
    }

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
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              type="text"
              value={values.keywords}
              onChange={handleInputChange}
              name="keywords"
              placeholder="keywords"
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