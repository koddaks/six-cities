import { useEffect } from 'react';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesOffersAction } from '../../store/api-actions';

import {
  getFavorites,
  getIsFavoritesLoading,
} from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';

function Favorites() {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getIsFavoritesLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(getFavoritesOffersAction());
    }
  }, [dispatch, authorizationStatus]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div
      className={`page ${
        favoriteOffers.length === 0 ? 'page--favorites-empty' : ''
      }`}
    >
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

      <main
        className={`page__main page__main--favorites ${
          favoriteOffers.length === 0 ? 'page__main--favorites-empty' : ''
        }`}
      >
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 && !isLoading ? (
            <FavoritesEmpty />
          ) : (
            <FavoritesList favoriteOffers={favoriteOffers} />
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
