import React from 'react';

import withStore from '../../containers/withStore';

const App = () => {
  return (
    <main>
      <h1>React/Redux Boilerplate</h1>
      <p>This is a boilerplate for React/Redux applications.</p>
    </main>
  );
};

export default withStore(App);
