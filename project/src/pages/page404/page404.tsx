import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <>
      <Helmet>
        <title>Six-cities: Page not found</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <h1>
                    404. <br /> Page not found
                  </h1>
                  <Link to="/">Back to main Page</Link>
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
export default Page404;
