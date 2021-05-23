import React, { Component, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchData } from '../actions'
import axios from 'axios';


class SearchBar extends Component {
  async componentDidMount() {
    try {
      await this.props.fetchData();
      let res = await axios.get('http://localhost:3000/events');
      console.log(res.data.length);

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.results.length}</h1>
        <br />
        <h1 className="text-info text-center">Historical Events Finder</h1>
        <br />
        <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="find historical events..."
            />
          </Form.Group>
        </Form>
        <Button variant="info" size="lg" block>
          Search
      </Button >
      </div>
    );
  }
};

const mapStateToProps = state => ({
  results: state.searchedReducer
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);