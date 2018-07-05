import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it('displays a comment box', () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it('displays a comment list', () => {
  expect(component.find(CommentList).length).toEqual(1);
});
