import{FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,ADD_TO_CART,REMOVE_FROM_CART } from './Actions'

const initialState = {
    Products: [],
    cartItems: [],
    loading: false,
    error: null
  };
  
  
  const UseReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        // debugger;
        return {
          ...state,
          loading: false,
          Products: action.payload
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case ADD_TO_CART:
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
          case REMOVE_FROM_CART:
            return {
              ...state,
              cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };
      default:
        return state;
    }
  };
  
  export default UseReducer;
  