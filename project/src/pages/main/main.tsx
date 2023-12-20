import PlacesCardList from '../../components/place-card-list/place-card-list';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/plases-sorting/places-sorting';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import { getOffersAction } from '../../store/api-actions';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const storeOffers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const offers = storeOffers.filter(
    (offer) => offer.city.name === activeCity.name
  );
  const isOffersLoading = useAppSelector((state) => state.isLoading);

  const [hoveredPlaceCardId, setHoveredPlaceCardId] = useState<number | null>(
    null
  );

  const setActiveCard = (id: number | null) => {
    setHoveredPlaceCardId(id);
  };

  useEffect(() => {
    dispatch(getOffersAction());
  }, []);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                className="header__logo-link header__logo-link--active"
                href="#todo"
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <HeaderNavigation />
          </div>
        </div>
      </header>

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
                    {offers.length} places to stay in {activeCity.name}
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
                  offers={offers}
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
