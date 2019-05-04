import { FETCH_POSTS, NEW_POST, REMOVE_BOOK,FETCH_PRODUCT_FILTER } from './types';

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
export const deleteContact = data =>dispatch => {
  debugger;
  fetch(`https://booklibrary-api.herokuapp.com/products/${data._id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
  .then(post =>
    dispatch({
      type: REMOVE_BOOK,
      payload: data._id
    })
  );
}
export const fetchProductsFilter = (searchValue) => {
  return {
      type: FETCH_PRODUCT_FILTER,
      searchValue
  }
};