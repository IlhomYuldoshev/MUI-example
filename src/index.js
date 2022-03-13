import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css"

import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61dafb"
    },
    secondary: {
      main: "#da6144"
    }
  }
})

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
