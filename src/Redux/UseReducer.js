import{FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,ADD_TO_CART,REMOVE_FROM_CART,ADD_USER } from './Actions'

const initialState = {
    Products: [],
    cartItems: [],
    users: [],
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
          // const { product, quantity } = action.payload;
          // const item = { ...product, quantity };
          return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
          }
          
          case REMOVE_FROM_CART:
            debugger;
            return {
              ...state,
              cartItems: state.cartItems.filter(item => item.product != action.payload)
            };

              case ADD_USER:
                debugger;
                return {
                  
                  ...state,
                  users: [...state.users, action.payload],
                  cartItems: []
                };
      default:
        return state;
    }
  };
  
  export default UseReducer;
  