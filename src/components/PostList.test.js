import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';

import PostList from './PostList';

const defaultProps = { posts: [] };

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<PostList store={store} />).dive().dive()
  return wrapper
}

it('does not throw warning with expected props', () => {
  const expectedProps = { posts: [] };
  checkProps(PostList, expectedProps)
})
