import{FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './Actions'

// Define initial state
const initialState = {
    Data: [],
    loading: false,
    error: null
  };
  
  // Define the reducer function
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          Data: action.payload
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  