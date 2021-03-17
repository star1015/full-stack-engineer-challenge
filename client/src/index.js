import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { getPlatform } from './utils/adlp';

const root = document.getElementById('cape-canaveral');
root.classList.add(`adt-platform-${getPlatform()}`);

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
