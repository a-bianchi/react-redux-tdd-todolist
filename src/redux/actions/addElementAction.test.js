/* global describe beforeEach expect test */
import configureStore from 'redux-mock-store';
import addElementAction from './addElementAction';

const mockStore = configureStore();
const store = mockStore();

describe('Add element to list', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('Add', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          payload: 'Hello word',
          type: 'ADD_ELEMENT',
        },
      ];

      store.dispatch(addElementAction('Hello word'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
