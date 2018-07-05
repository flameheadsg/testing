import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';;

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it('displays a text area and button', () => {
  expect(component.find('textarea').length).toEqual(1);
});

it('displays a button', () => {
  expect(component.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    component.update();
  });

  it('handles textarea change properly', () => {
    expect(component.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears the textarea after form submission', () => {
    component.find('form').simulate('submit');
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });

});
