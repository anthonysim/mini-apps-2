import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap';


const Events = () => {
  const data = useSelector(state => state.searchedReducer);

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
            <td>1</td>
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
};

export default Events;
