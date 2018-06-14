import { combineReducers, createStore } from 'redux';
import groceriesReducer from '../reducers/groceries';

export default () => {
  const store = createStore(
    combineReducers({
      groceries: groceriesReducer
    })
  );

  return store;
};
