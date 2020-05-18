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

// it('renders the post list component without error', () => {
//   const initialState = { posts: [] };
//   const wrapper = setup(initialState)
//   const postListComponent = findByTestAttr(wrapper, 'component-post-list')
//   expect(postListComponent.length).toBe(1)
// })

it('does not throw warning with expected props', () => {
  const expectedProps = { posts: [] };
  checkProps(PostList, expectedProps)
})