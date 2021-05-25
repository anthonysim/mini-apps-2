import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import './styling/styles.css';
import ReactPaginate from 'react-paginate';


const Events = () => {
  const { searchedReducer: data, dataFoundReducer: dataFound, yearReducer: searchYr } = useSelector(state => state);
  const [pageNum, setPageNum] = useState(0);
  const [year, setYear] = useState(0);

  // everytime searchYr is updated, setPageNum(0) is invoked
  useEffect(() => {
    setPageNum(0);
  }, [searchYr]);

  let results = data.map(({ date, description }, i) => {
    return <tr key={i}><td>{date}</td><td>{description}</td></tr>
  })

  const dataPerPage = 10;
  const pagesVisited = pageNum * dataPerPage;
  const displayData = results.slice(pagesVisited, pagesVisited + dataPerPage);
  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  }

  // if (data.length > 0) {
  //   console.log('total length:', data.length)
  //   console.log(data[0])
  // }

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
      <h5 className="text-center text-secondary">{data.length > 0 && `Page ${pageNum + 1}`}</h5>
    </div >
  );
};


export default Events;
