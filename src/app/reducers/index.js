import { combineReducers, } from 'redux';

import uiReducer from './ui';

export const generateAppReducers = () => combineReducers({
  config: (state = {}) => state,
  ui: uiReducer,
});

export default generateAppReducers({});
