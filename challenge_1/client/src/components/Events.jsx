import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';

import ReactPaginate from 'react-paginate';


const Events = () => {
  const { searchedReducer: data, dataFoundReducer: dataFound } = useSelector(state => state);

  if (data.length) {
    console.log(data)
    console.log(dataFound)
  }

  return (
    <div>
      <br />
      <h1>{dataFound.toString()}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Year</th>
            <th>Description</th>
          </tr>
        </thead>

        {!dataFound && <tbody>
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
        </tbody>}
      </Table>
    </div >
  );
};

export default Events;
