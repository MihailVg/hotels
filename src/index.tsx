import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersData } from './mocks/offers.data';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App offers={offersData} />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);
