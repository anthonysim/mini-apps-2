import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';

import ReactPaginate from 'react-paginate';


const Events = () => {
  const { searchedReducer: data, dataFoundReducer: dataFound } = useSelector(state => state);

  // if (data.length) {
  //   console.log(data)
  //   console.log(dataFound)
  // }

  let results = data.map(({ date, description }, i) => {
    return <tr key={i}><td>{date}</td><td>{description}</td></tr>
  })

  return (
    <div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Year</th>
            <th>Description</th>
          </tr>
        </thead>

        {!dataFound && <tbody>

          {results}
          {/* <tr>
            <td>1</td>
            <td>2</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr> */}

        </tbody>}
      </Table>
    </div >
  );
};

export default Events;
