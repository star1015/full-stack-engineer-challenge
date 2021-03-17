import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application } from './styles';
import Dashboard from '../containers/Dashboard';
const App = () => (
  <>
    <Application >
      <Dashboard />
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);