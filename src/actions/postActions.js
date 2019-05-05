import { FETCH_POSTS,FETCH_PRODUCT_FILTER,SELECT_FILTER } from './types';

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
  }).then(res => {
    dispatch(fetchPosts())
  })
};

export const createPatch = (patchData) => dispatch => {
  debugger;
  fetch(`https://booklibrary-api.herokuapp.com/products/${patchData._id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(patchData)
  }).then(res => {
    dispatch(fetchPosts())
  })
};
export const deletePost = data =>dispatch => {
  debugger;
  fetch(`https://booklibrary-api.herokuapp.com/products/${data._id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => {
    dispatch(fetchPosts())
  })
}
export const fetchProductsFilter = (searchValue) => {
  return {
      type: FETCH_PRODUCT_FILTER,
      searchValue
  }
};

export const filerOptionValue = (selectedValue) => {
  return {
      type: SELECT_FILTER,
      selectedValue
  }
};
