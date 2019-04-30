import { createElement, } from 'react';
import { render, } from 'react-dom';
import App from '../components/App';

const renderApp = (props = {}, elementId = 'root') => {
  render(createElement(App, props), document.getElementById(elementId));
};

export default renderApp;
