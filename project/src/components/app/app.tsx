import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import LogIn from '../../pages/login/login';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types';
import { useState } from 'react';

export type AppProps = {
  offers: Offer[];
};

function App({ offers }: AppProps): JSX.Element {
  const [hoveredPlaceCardId, setHoveredPlaceCardId] = useState<number | null>(
    null
  );

  const setActiveCard = (id: number | null) => {
    setHoveredPlaceCardId(id);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              offers={offers}
              setActiveCard={setActiveCard}
              hoveredPlaceCardId={hoveredPlaceCardId}
            />
          }
        />
        <Route path={AppRoute.Login} element={<LogIn />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<Property offers={offers} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
