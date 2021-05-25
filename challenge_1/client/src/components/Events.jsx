import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


const Events = () => {
  const data = useSelector(state => state.searchedReducer);

  if (data.length) {
    console.log(data[0].date)
  }

  return (
    <div>
      <br />
      {data.length === 0
        ? <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Description</th>
            </tr>
          </thead>
        </Table>
        : <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </Table>}
    </div >
  );
};

export default Events;
