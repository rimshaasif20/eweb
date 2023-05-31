import axios from 'axios';
import Products from '../Data';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDummyData = () => {
    debugger;
  return async (dispatch) => {
    try {
     
      dispatch({ 
        type: FETCH_DATA_SUCCESS, 
          payload: Products 
    });
   localStorage.setItems('Products',JSON.stringify(Products) )
    } catch (error) {
      // Handle error if any
      dispatch({ 
        type: FETCH_DATA_FAILURE,
       payload: error.message 
    });
    }
  };
};
