import PlacesCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/plases-sorting/places-sorting';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import { getOffersAction } from '../../store/api-actions';
import { getIsLoading, getOffers } from '../../store/app-data/selectors';
import { getCurrentCity } from '../../store/app-process/selectors';
import Header from '../../components/header/header';
import MainEmpty from '../main-empty/main-empty';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCurrentCity);
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === activeCity.name
  );

  const isOffersLoading = useAppSelector(getIsLoading);

  const [hoveredPlaceCardId, setHoveredPlaceCardId] = useState<number | null>(
    null
  );

  const setActiveCard = (id: number | null) => {
    setHoveredPlaceCardId(id);
  };

  useEffect(() => {
    dispatch(getOffersAction());
  }, [dispatch]);


  if (currentCityOffers.length === 0 && !isOffersLoading) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              {isOffersLoading ? (
                <Spinner />
              ) : (
                <>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currentCityOffers.length} places to stay in{' '}
                    {activeCity.name}
                  </b>
                  <PlacesSorting />
                  <PlacesCardList setActiveCard={setActiveCard} />
                </>
              )}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={activeCity}
                  placeLocationId={hoveredPlaceCardId}
                  offers={currentCityOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
