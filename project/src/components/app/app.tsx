import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import LogIn from '../../pages/login/login';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import ScrollToTop from '../../utils/scrollToTop';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Login} element={<LogIn />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Property}/:id`} element={<Property />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
