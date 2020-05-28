import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import App from './App';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

it('renders app component without error', () =>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

it("renders a header with the text 'Simple Blog'", () => {
  const wrapper = setup();
  const header = findByTestAttr(wrapper, 'app-header');
  expect(header.text()).toMatch('Simple Blog')
})
