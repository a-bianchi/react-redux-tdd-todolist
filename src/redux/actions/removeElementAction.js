import { createAction } from 'redux-actions';
import { REMOVE_ELEMENT } from './types';

const removeElementAction = createAction(REMOVE_ELEMENT, id => id);

export default removeElementAction;
