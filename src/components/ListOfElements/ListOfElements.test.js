/* global describe expect it */
import React from 'react';
import { shallow } from 'enzyme';
import ListOfElements from './index';

describe('ListOfElements', () => {
  it('should be defined', () => {
    expect(ListOfElements.defaultProps.rows).toBeDefined();
  });
  it('should render correctly', () => {
    const rows = [{ key: 12345, name: 'Firsttask' }];
    const tree = shallow(<ListOfElements rows={rows} removeElement={() => 'something'} />);
    expect(tree.find('.table-task')).toBeDefined();
    expect(tree.find('.task-0')).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
