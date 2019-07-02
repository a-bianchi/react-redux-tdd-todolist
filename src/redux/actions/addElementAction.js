import { createAction } from 'redux-actions';
import { ADD_ELEMENT } from './types';

const addElementAction = createAction(ADD_ELEMENT, task => task);

export default addElementAction;
