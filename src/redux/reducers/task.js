import { handleActions } from 'redux-actions';
import { ADD_ELEMENT, REMOVE_ELEMENT } from '../actions/types';

const Task = handleActions(
  {
    [ADD_ELEMENT]: (state, action) => [...state, action.payload],
    [REMOVE_ELEMENT]: (state, action) => state.filter(c => c.key !== action.payload),
  },
  [
    {
      key: 12345,
      name: 'First task',
    },
  ],
);

export default Task;
