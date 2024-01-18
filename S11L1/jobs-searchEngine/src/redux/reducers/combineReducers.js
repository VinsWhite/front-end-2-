import { combineReducers } from 'redux';
import mainReducer from './index';
import jobReducer from './JobReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  jobs: jobReducer,
});

export default rootReducer;
