import { createAction } from 'redux-actions';
import { START_APP } from './types';

const appStartAction = createAction(START_APP, status => status);

export default appStartAction;
