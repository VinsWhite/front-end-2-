import { combineReducers } from 'redux';
import jobsReducer from './reducer';

const rootReducer = combineReducers({
  jobs: jobsReducer
});

export default rootReducer;
