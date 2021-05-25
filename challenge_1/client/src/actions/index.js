import axios from 'axios';


export const hasData = (bool) => {
  return {
    type: 'DATA_NOT_FOUND',
    dataFound: bool
  };
}

export const searchedYear = (year) => {
  return {
    type: 'SEARCHED_YEAR',
    year
  };
}

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(hasData(false));

    axios.get(url)
      .then(res => res.data)
      .then(data => {

        if (data.length === 0) {
          dispatch(hasData(true));
        }
        return data;
      })
      .then(data => {
        dispatch(searchedYear(data[0]['date']));

        dispatch({
          type: 'HISTORY_SEARCH',
          payload: data
        })
      })
      .catch(err => console.error(err));
  };
};

