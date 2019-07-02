/* global describe expect test */
import Task from './task';
import { ADD_ELEMENT, REMOVE_ELEMENT } from '../actions/types';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };

    expect(Task(undefined, action)).toMatchSnapshot();
  });
});

describe('ADD_ELEMENT', () => {
  test('returns the correct state', () => {
    const action = { type: ADD_ELEMENT, payload: 'First task' };

    expect(Task(undefined, action)).toMatchSnapshot();
  });
});

describe('REMOVE_ELEMENT', () => {
  test('returns the first element', () => {
    const action = { type: REMOVE_ELEMENT, payload: 12345 };

    expect(Task(undefined, action)).toMatchSnapshot();
  });
});
