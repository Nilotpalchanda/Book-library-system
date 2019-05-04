import { FETCH_POSTS, NEW_POST, REMOVE_BOOK } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://booklibrary-api.herokuapp.com/products')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.response.product
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://booklibrary-api.herokuapp.com/products', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
export const deleteContact = (id) => {
  debugger;
  fetch(`https://booklibrary-api.herokuapp.com/products/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => console.log('qqq',res.json()))
}