import React, { Component, useState } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchData } from '../actions'
import axios from 'axios';


class SearchBar extends Component {
  state = {
    selection: '',
    filteredResults: []
  }

  async componentDidMount() {
    try {
      await this.props.fetchData();

    } catch (err) {
      console.error(err);
    }
  }

  handleSelect = (e) => {
    console.log(e);
    this.setState({ selection: e })

  }

  render() {
    return (
      <div>
        <br />
        <h1 className="text-info text-center">Historical Events Finder</h1>
        <br />
        <Dropdown onSelect={this.handleSelect} >
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Select
        </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item eventKey="Date">Date</Dropdown.Item>
            <Dropdown.Item eventKey="Category">Category</Dropdown.Item>
            <Dropdown.Item eventKey="Keywords">Keywords</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <h4 className="text-info">{this.state.selection === '' ? 'Choose Selection Above' : `Search by ${this.state.selection}`}</h4>
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