import React from 'react';
import { Table } from 'react-bootstrap';

const Events = () => {
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
};

export default Events;