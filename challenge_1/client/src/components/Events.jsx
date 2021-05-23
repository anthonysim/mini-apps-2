import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


class Events extends Component {
  render() {
    console.log(this.props.results)
    return (
      <div>
        <br />
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>

            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  results: state.searchedReducer
})


export default connect(mapStateToProps)(Events);