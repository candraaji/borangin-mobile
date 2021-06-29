import {combineReducers} from 'redux';
import {reducer as userReducer} from './users/reducers';

const reducer = combineReducers({
  user: userReducer,
});

export {reducer};
