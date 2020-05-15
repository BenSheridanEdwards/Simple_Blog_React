import axios from 'axios'

export const fetchPosts = async () => {
  const baseURL = "https://jsonplaceholder.typicode.com"
  const response = await axios.get(baseURL + '/posts');
  
  return {
    type: 'FETCH_POSTS',
    payload: response
  };
}
