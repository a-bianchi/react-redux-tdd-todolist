/* global describe beforeEach expect test */
import configureStore from 'redux-mock-store';
import removeElementAction from './removeElementAction';

const mockStore = configureStore();
const store = mockStore();

describe('Remove element to list', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('Remove', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          payload: 12345,
          type: 'REMOVE_ELEMENT',
        },
      ];

      store.dispatch(removeElementAction(12345));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
