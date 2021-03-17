import { hot } from 'react-hot-loader/root';
import React from 'react';

// Pages
import Dashboard from '../containers/Dashboard';

// Styles
import GlobalStyle from '../theme';
import { Application } from './styles';

const App = () => (
  <>
    <Application >
      <Dashboard />
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);