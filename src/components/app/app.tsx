import { HelmetProvider } from 'react-helmet-async';
import { OfferType } from '../../types';
import Router from '../router/router';
import { BrowserRouter } from 'react-router-dom';

type AppProps = {
  offers: OfferType[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router offers={offers} />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
