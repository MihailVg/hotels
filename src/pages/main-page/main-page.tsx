import Header from '../../components/header/header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import { Helmet } from 'react-helmet-async';
import MainPageContent from './main-page-content/main-page-content';
import {
  useAppSelector,
} from '../../hooks/redux-hooks/redux-hooks';
import { getCurrentCity, getOffers, getSorting } from '../../store/slices/offers/selectors';
import { setCurrentCity, setSorting } from '../../store/slices/offers/offers';
import { store } from '../../store';
import { useEffect } from 'react';

export default function MainPage() {
  const activeCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const sortingType = useAppSelector(getSorting);

  useEffect(() => {
    store.dispatch(setSorting(sortingType));
  }, [sortingType]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
        <meta name="description" content="6 Cities" />
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationTabs
          activeCity={activeCity}
          onActiveCity={(city) => store.dispatch(setCurrentCity(city))}
        />
        <MainPageContent offers={offers} />
      </main>
    </div>
  );
}
