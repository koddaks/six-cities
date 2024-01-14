import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthLogInStatus } from '../../store/user-process/selectors';

import Spinner from '../spinner/spinner';
import { getLoadingStatus } from '../../store/app-data/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const isLoading = useAppSelector(getLoadingStatus);
  const isUserLoggedIn = useAppSelector(getAuthLogInStatus);


  if (!isUserLoggedIn && !isLoading) {
    return <Spinner />;
  }

  return isUserLoggedIn ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
