import { handleActions } from 'redux-actions';
import { START_APP } from '../actions/types';

const App = handleActions(
  {
    [START_APP]: (state, action) => ({ ...state, status: action.payload.status }),
  },
  {
    status: 'App Runing!!!',
  },
);

export default App;
