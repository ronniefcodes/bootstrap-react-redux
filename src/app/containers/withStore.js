import React, { Component, } from 'react';
import { Provider } from 'react-redux';

import { generateStore, } from '../utils/store';
import { generateInitialState, } from '../utils/state';

function withStore(WrappedComponent) {
  return class extends Component {
    render() {
      const state = generateInitialState(this.props);

      return (
        <Provider store={generateStore(state)}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  }
}

export default withStore;
