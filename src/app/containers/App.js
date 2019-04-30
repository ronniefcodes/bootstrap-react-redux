import React, { Component, } from 'react';
import { Provider } from 'react-redux';

import App from '../components/App';
import { generateStore, } from '../utils/store';
import { generateInitialState, } from '../utils/state';

class AppContainer extends Component {
  render() {
    const state = generateInitialState(this.props);

    return (
      <Provider store={generateStore(state)}>
        <App />
      </Provider>
    )
  }
}

export default AppContainer;
