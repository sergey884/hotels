import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

const rnd = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

rnd(App);
