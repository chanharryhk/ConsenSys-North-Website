import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {cyan200, grey900} from 'material-ui/styles/colors';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {

  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
document.getElementById('root'));
