import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import React from 'react';
import { getFavorites } from '../../store/app-data/selectors';

function HeaderNavigation() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteCount = useAppSelector(getFavorites).length;
  const dispatch = useAppDispatch();

  const getContent = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a
              className="header__nav-link header__nav-link--profile"
              href="#todo"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
            </a>
            <Link to={AppRoute.Favorites}>
              <span className="header__favorite-count">{favoriteCount}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to={AppRoute.Root}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            to={AppRoute.Login}
            className="header__nav-link header__nav-link--profile"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    );
  };

  return <nav className="header__nav">{getContent()}</nav>;
}

export default React.memo(HeaderNavigation);
