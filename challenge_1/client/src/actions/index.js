import axios from 'axios';

export const fetchData = (url) => {
  return (dispatch) => {
    return axios.get(url)
      .then(res => res.data)
      .then(data => {
        dispatch({
          type: 'HISTORY_SEARCH',
          payload: data
        })
      })
      .catch(err => console.error(err));
  };
};


