import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import '../node_modules/modern-normalize/modern-normalize.css';
import { store, persistor } from './redux/store';
import { materialTheme } from './helpers/theme';
import App from './components/app/App';
import { GlobalStyled } from './GlobalStyled.styled';
import Loader from './components/ loader /Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <ThemeProvider theme={materialTheme}>
                    <GlobalStyled />
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
