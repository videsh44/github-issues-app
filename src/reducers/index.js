import { combineReducers } from 'redux';

import github from './github';
import countIncrement from './countIncrement';

export default combineReducers({
  github,
  countIncrement,
});
