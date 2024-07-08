import Header from '../../components/header/header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import { OfferType } from '../../types';
import { Helmet } from 'react-helmet-async';
import MainPageContent from './main-page-content/main-page-content';

type MainPageProps = {
  offers: OfferType[];
};

export default function MainPage({ offers }: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
        <meta name="description" content="6 Cities" />
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationTabs />
        <MainPageContent offers={offers}/>
      </main>
    </div>
  );
}
