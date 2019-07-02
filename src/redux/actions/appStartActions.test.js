/* global describe beforeEach expect test */
import configureStore from 'redux-mock-store';
import appStartAction from './appStartAction';

const mockStore = configureStore();
const store = mockStore();

describe('Start App', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('Start', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          payload: 'status',
          type: 'START_APP',
        },
      ];

      store.dispatch(appStartAction('status'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
