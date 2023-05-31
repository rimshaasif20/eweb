
import { createStore, combineReducers } from 'redux';
import Reducer from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
  Data: Reducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools() 
  );

export default store;