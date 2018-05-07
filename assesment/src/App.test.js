import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
    expect(app).toHaveClassName('App')
  })

  // it('contains a title', () => {
  //   expect(app.find('h1.title')).toHaveText('Student Evaluation')
  // })
})