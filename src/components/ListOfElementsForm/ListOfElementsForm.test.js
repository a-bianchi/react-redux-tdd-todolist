/* global describe expect it */
import React from 'react';
import { shallow } from 'enzyme';
import ListOfElementsForm from './index';

describe('ListOfElementsForm', () => {
  it('should be defined', () => {
    expect(ListOfElementsForm.defaultProps.handleAction).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<ListOfElementsForm />);
    expect(tree).toEqual({});
    expect(tree).toMatchSnapshot();
  });
});
