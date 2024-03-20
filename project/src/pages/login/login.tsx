import { FormEvent, useEffect, useRef } from 'react';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import Header from '../../components/header/header';
import { hasEnglishCharacters, hasNumber, isAnySpaces } from '../../utils';

function LogIn() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleRedirectToMainPage = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  };

  useEffect(() => {
    handleRedirectToMainPage();
  }, [authorizationStatus]);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      passwordRef.current !== null &&
      isAnySpaces(passwordRef.current.value)
    ) {
      toast.warn('Password should not contain spaces.');
    } else if (
      passwordRef.current !== null &&
      loginRef.current !== null &&
      !hasEnglishCharacters(passwordRef.current.value)
    ) {
      toast.warn('Password should contain English characters.');
    } else if (
      passwordRef.current !== null &&
      loginRef.current !== null &&
      !hasNumber(passwordRef.current.value)
    ) {
      toast.warn('Password should contain at least one number.');
    } else if (loginRef.current !== null && passwordRef.current !== null) {
      toast.success('You are logged in!');
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LogIn;
