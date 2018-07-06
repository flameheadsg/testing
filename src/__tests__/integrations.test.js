import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'comment1' }, { name: 'comment2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );
  component.find('#fetch-comments').simulate('click');
  moxios.wait(() => {
    component.update();
    expect(component.find('li').length).toEqual(2);
    done();
    component.unmount();
  });
});
