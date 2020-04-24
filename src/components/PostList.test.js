import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';

import PostList from './PostList';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<PostList {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

it('renders without error', () =>{
  const wrapper = setup();
  const postListComponent = findByTestAttr(wrapper, 'component-post-list');
  expect(postListComponent.length).toBe(1);
});
