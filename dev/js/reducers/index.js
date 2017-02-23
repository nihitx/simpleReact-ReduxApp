import {combineReducers} from "redux"; /* combines all reducers to Store*/
import UserReducer from './reducer-users';

const allReducers = combineReducers({
  users : UserReducer
});
