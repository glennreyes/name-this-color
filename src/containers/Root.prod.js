import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;
