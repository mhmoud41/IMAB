import axios from 'axios';
import {
    GET_PRODUCTS,
    PRODUCT_ERROR,
    ADD_PRODUCT,
    GET_PRODUCT,
    CLEAR_PRODUCT
  } from './types';
  
  export const getProducts = () => async dispatch => {
    dispatch({ type: CLEAR_PRODUCT });
    try {
      const res = await axios.get('/api/products');
      
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  export const addProduct = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/product', formData, config);
  
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
  
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  export const getProduct = id => async dispatch => {
    try {
      const res = await axios.get(`/api/product/${id}`);
  
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  