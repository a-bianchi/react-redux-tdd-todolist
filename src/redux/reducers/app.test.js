/* global describe expect test */
import App from './app';
import { START_APP } from '../actions/types';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };

    expect(App(undefined, action)).toMatchSnapshot();
  });
});

describe('START_APP', () => {
  test('returns the correct state', () => {
    const action = { type: START_APP, payload: 'status' };

    expect(App(undefined, action)).toMatchSnapshot();
  });
});
