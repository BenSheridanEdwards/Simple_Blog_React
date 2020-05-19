import axios from 'axios'
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {
    const baseURL = "https://jsonplaceholder.typicode.com"
    const response = await axios.get(baseURL + '/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  };

export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  const baseURL = "https://jsonplaceholder.typicode.com"
  const response = await axios.get(baseURL + `/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
});
