import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersData } from './mocks/offers.data';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/auth';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <AuthProvider>
          <Provider store={store}>
            <App offers={offersData} />
          </Provider>
        </AuthProvider>
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);
