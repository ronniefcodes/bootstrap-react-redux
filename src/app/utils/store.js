import { createStore, applyMiddleware, compose, } from 'redux';
import thunk from 'redux-thunk';

import { generateAppReducers, } from '../reducers';

export const generateStore = (defaultState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    generateAppReducers(),
    defaultState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
