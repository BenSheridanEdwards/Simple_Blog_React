import axios from 'axios'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUser(id)))
   .value();

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const response = await axios.get(baseURL + '/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const response = await axios.get(baseURL + `/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};


// Memoize Fetch User Action Creator 

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const baseURL = "https://jsonplaceholder.typicode.com"
//   const response = await axios.get(baseURL + `/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data })
// });
