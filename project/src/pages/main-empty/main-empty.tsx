import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/app-process/selectors';

function MainEmpty() {
  const activeCity = useAppSelector(getCurrentCity);

  return (
    <>
      <Helmet>
        <title>Six-cities: No places in {activeCity.name}</title>
        <link id="favicon" rel="icon" href="../../../public/favicon.ico" />
      </Helmet>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations />
          </div>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    {`We could not find any property available at the moment in ${activeCity.name}`}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainEmpty;
