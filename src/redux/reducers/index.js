import { combineReducers } from 'redux';
import App from './app';
import tasks from './task';

export default combineReducers({
  App,
  tasks,
});
