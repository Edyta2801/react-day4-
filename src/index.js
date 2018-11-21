import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'



ReactDOM.render(
    <MultiThemeProvider>
        <App />
    </MultiThemeProvider>,
    document.getElementById('root')
)