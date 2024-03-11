import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import PropertyDescriptionList from '../../components/property-description-list/property-description-list';
import Reviews from '../../components/reviews/reviews';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import {
  getFavoritesOffersAction,
  getOfferByIdAction,
  getOffersNearbyAction,
  getReviewsbyIdAction,
  postFavoriteAction,
} from '../../store/api-actions';
import Page404 from '../page404/page404';
import Spinner from '../../components/spinner/spinner';
import { APIRoute, AuthorizationStatus, FavoriteStatus } from '../../const';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import { getCurrentCity } from '../../store/app-process/selectors';
import {
  getIsUserAuthenticated,
  getAuthorizationStatus,
} from '../../store/user-process/selectors';
import {
  getCurrentOffer,
  getIsLoading,
  getOffersNearby,
} from '../../store/app-data/selectors';
import { toast } from 'react-toastify';

function Property(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCurrentCity);
  const { id } = useParams<{ id: string }>();

  const [hoveredPlaceCardId, setHoveredPlaceCardId] = useState<number | null>(
    null
  );

  const onSetActiveCard = (cardId: number | null) => {
    setHoveredPlaceCardId(cardId);
  };

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentOffer = useAppSelector(getCurrentOffer);
  const isLoading = useAppSelector(getIsLoading);
  const currentOffersNearby = useAppSelector(getOffersNearby);
  const isUserLoggedIn = useAppSelector(getIsUserAuthenticated);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [offersPerPage] = useState(3);

  const lastOfferIndex = currentPage * offersPerPage;
  const firstOfferIndex = lastOfferIndex - offersPerPage;
  const currentVisibleOffers = currentOffersNearby.slice(
    firstOfferIndex,
    lastOfferIndex
  );

  const onPageClick = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const showReviewsWithAuth =
    authorizationStatus === AuthorizationStatus.Auth ? <Reviews /> : null;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(getFavoritesOffersAction());
    }
    if (id) {
      dispatch(getOfferByIdAction(id));
      dispatch(getOffersNearbyAction(id));
      dispatch(getReviewsbyIdAction(id));
    }
  }, [id, dispatch, authorizationStatus]);

  const handleonSetFavorite = (isFavorite: boolean, offerId: number) => {
    if (!isUserLoggedIn) {
      toast.warn('You must log in or register to add to favorites.');
      navigate(APIRoute.Login);
    } else {
      const newFavoriteStatus = isFavorite
        ? FavoriteStatus.NotFavorite
        : FavoriteStatus.Favorite;

      dispatch(postFavoriteAction([newFavoriteStatus, offerId]));
    }
  };

  if (isLoading) {
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
              <PropertyDescriptionList
                onSetFavorite={handleonSetFavorite}
                offer={currentOffer}
              />
            ) : null}
            {showReviewsWithAuth}
          </div>

          <section className="property__map map">
            <Map
              city={activeCity}
              offers={currentVisibleOffers}
              placeLocationId={hoveredPlaceCardId}
            />
          </section>
        </section>
        <div className="container">
          <NearPlaces
            offers={currentVisibleOffers}
            onSetActiveCard={onSetActiveCard}
            onSetFavorite={handleonSetFavorite}
            offersPerPage={offersPerPage}
            onPageClick={onPageClick}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
