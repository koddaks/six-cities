import { AppRoute } from '../../const';
import HeaderNavigation from '../header-navigation/header-navigation';

function Header() {
  const isShowHeaderNavigation = window.location.pathname !== AppRoute.Login;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          {isShowHeaderNavigation && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
