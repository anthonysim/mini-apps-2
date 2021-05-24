import React, { Component } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';


class Events extends Component {
  render() {
    if (this.props.results.length > 0) {
      console.log(this.props.results[0].date)
    }
    return (
      <div>
        <br />
        <br />
        <br />
        <h1></h1>
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
              <td>{this.props.results.length > 0 && this.props.results[0].date}</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
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