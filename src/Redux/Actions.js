
import Products from '../Data';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const  REMOVE_FROM_CART= 'REMOVE_FROM_CART';

export const fetchDummyData = () =>  (dispatch) => {
    try {
      dispatch({ 
        type: FETCH_DATA_SUCCESS, 
          payload: Products 
    });
   localStorage.setItems('Products', JSON.stringify(Products) )

    } catch (error) {
      dispatch({ 
        type: FETCH_DATA_FAILURE,
       payload: error.message 
    });
    }
  };
  export const addToCart = (product, quantity) =>(dispatch)=> {
  
  try {
    dispatch({
    type: ADD_TO_CART,
    payload: {
     product: product.id,
     name: product.name,
     image: product.image,
     price: product.price,
     quantity: Number(quantity),
    }
    })
   // localStorage.setItems('CartItems', JSON.stringify(cartItems) );
  }
  catch (error) {
    dispatch({ 
      type: FETCH_DATA_FAILURE,
     payload: error.message 
  });
  }
  }

  export const removeFromCart = (productId) => {
    debugger;
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId
    };
  };