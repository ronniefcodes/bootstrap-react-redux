import React from 'react';
import ReactDOM from 'react-dom';
import TextButton from './TextButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
