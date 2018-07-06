import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';;
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  component.unmount();
});

it('displays a text area', () => {
  expect(component.find('textarea').length).toEqual(1);
});

it('displays buttons', () => {
  expect(component.find('button').length).toEqual(2);
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
