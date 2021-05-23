import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/events')
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


