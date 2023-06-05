
import { createStore, combineReducers, applyMiddleware } from 'redux';
import UseReducer from './UseReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
 ProductItems: UseReducer,
 cartItems: UseReducer,
 users: UseReducer
});
// const StorageProducts=localStorage.getItem("Products")? JSON.parse(localStorage.getItem("Products")):null;
// const initialState={
//   ProductItems: {Products: StorageProducts}
// }
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) 
  );

export default store;