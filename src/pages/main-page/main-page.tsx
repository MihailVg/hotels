import Header from '../../components/header/header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import { Helmet } from 'react-helmet-async';
import MainPageContent from './main-page-content/main-page-content';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/redux-hooks/redux-hooks';
import { changeCityAction } from '../../store/action';


export default function MainPage() {
  const activeCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const filteredOffersByCity = offers.filter(
    (offer) => offer.city.name === activeCity
  );

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
          onActiveCity={(city) => dispatch(changeCityAction({ city }))}
        />
        <MainPageContent offers={filteredOffersByCity} />
      </main>
    </div>
  );
}
