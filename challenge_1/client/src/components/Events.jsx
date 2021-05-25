import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import './styling/styles.css';

import ReactPaginate from 'react-paginate';


const Events = () => {
  const { searchedReducer: data, dataFoundReducer: dataFound } = useSelector(state => state);

  let results = data.map(({ date, description }, i) => {
    return <tr key={i}><td>{date}</td><td>{description}</td></tr>
  })

  const [pageNum, setPageNum] = useState(0);
  const dataPerPage = 10;
  const pagesVisited = pageNum * dataPerPage;
  const displayData = results.slice(pagesVisited, pagesVisited + dataPerPage);
  const pageCount = Math.ceil(data.length / dataPerPage);

  if (data.length > 0) {
    console.log(data)
  }

  const changePage = ({ selected }) => {
    setPageNum(selected);
  }

  return (
    <div>
      <br />
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Year</th>
            <th>Description</th>
          </tr>
        </thead>
        {!dataFound && <tbody>{displayData}</tbody>}
      </Table>

    </div >
  );
};

export default Events;
