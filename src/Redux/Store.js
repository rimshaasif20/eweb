
import { createStore, combineReducers, applyMiddleware } from 'redux';
import UseReducer from './UseReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
 ProductItems: UseReducer,
 cartItems: UseReducer

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) 
  );

export default store;