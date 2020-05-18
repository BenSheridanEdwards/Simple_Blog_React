import axios from 'axios'

export const fetchPosts = () => async dispatch => {
    const baseURL = "https://jsonplaceholder.typicode.com"
    const response = await axios.get(baseURL + '/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  };
