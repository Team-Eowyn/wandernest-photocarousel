import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { shallow, mount, render, configure } from 'enzyme';
import Modal from '../client/src/components/Modal.jsx';

configure({adapter: new Adapter()});


describe('<Modal />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Modal bar="baz" />);
    expect(wrapper.props().bar).toEqual('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });

  xit('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Modal onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').at(0).simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});