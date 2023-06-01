
import Products from '../Data';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const  REMOVE_FROM_CART= 'REMOVE_FROM_CART';

export const fetchDummyData = () =>  (dispatch) => {
  // debugger;
    try {
      dispatch({ 
        type: FETCH_DATA_SUCCESS, 
          payload: Products 
    });
   localStorage.setItems('Products', JSON.stringify(Products) )

    } catch (error) {
      // Handle error if any
      dispatch({ 
        type: FETCH_DATA_FAILURE,
       payload: error.message 
    });
    }
  };
  export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
  };
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId
    };
  };