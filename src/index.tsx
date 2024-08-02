import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersData } from './mocks/offers.data';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/auth';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <App offers={offersData} />
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
