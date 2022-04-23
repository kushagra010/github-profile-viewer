import React, { Suspense } from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import store from 'Redux/store';
import CircularProgress from 'Components/CircularProgress';
import App from './App';
import theme from './theme';
import './i18n';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<CircularProgress />}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
