import { useParams } from 'react-router-dom';
import { MouseEventHandler, useEffect, useState } from 'react';
import PropertyDescriptionList from '../../components/property-description-list/property-description-list';
import Reviews from '../../components/reviews/reviews';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import {
  getOfferByIdAction,
  getOffersNearbyAction,
  getReviewsbyIdAction,
  postFavoriteAction,
} from '../../store/api-actions';
import Page404 from '../page404/page404';
import Spinner from '../../components/spinner/spinner';
import { AuthorizationStatus, FavoriteStatus } from '../../const';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import { getCurrentCity } from '../../store/app-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import {
  getCurrentOffer,
  getLoadingStatus,
  getOffersNearby,
} from '../../store/app-data/selectors';

function Property(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCurrentCity);
  const { id } = useParams<{ id: string }>();

  const [hoveredPlaceCardId, setHoveredPlaceCardId] = useState<number | null>(
    null
  );

  const setActiveCard = (cardId: number | null) => {
    setHoveredPlaceCardId(cardId);
  };

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentOffer = useAppSelector(getCurrentOffer);
  const isOfferLoading = useAppSelector(getLoadingStatus);
  const currentOffersNearby = useAppSelector(getOffersNearby);

  const showReviewsWithAuth =
    authorizationStatus === AuthorizationStatus.Auth ? <Reviews /> : null;

  useEffect(() => {
    if (id) {
      dispatch(getOfferByIdAction(id));
      dispatch(getOffersNearbyAction(id));
      dispatch(getReviewsbyIdAction(id));
    }
  }, [id, dispatch]);

  const handleSetFavorite =
  (
    IsStatusFavorite: boolean,
    offerId: number
  ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();

      dispatch(
        postFavoriteAction([
          !IsStatusFavorite
            ? FavoriteStatus.Favorite
            : FavoriteStatus.NotFavorite,
          offerId,
        ])
      );
    };

  if (isOfferLoading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <Page404 />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
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

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery offer={currentOffer} />
          <div className="property__container container">
            {currentOffer ? (
              <PropertyDescriptionList setFavorite={handleSetFavorite} offer={currentOffer} />
            ) : null}
            {showReviewsWithAuth}
          </div>

          <section className="property__map map">
            <Map
              city={activeCity}
              offers={currentOffersNearby}
              placeLocationId={hoveredPlaceCardId}
            />
          </section>
        </section>
        <div className="container">
          <NearPlaces
            offers={currentOffersNearby}
            setActiveCard={setActiveCard}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
