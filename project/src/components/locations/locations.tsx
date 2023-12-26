import { useAppDispatch, useAppSelector } from '../../hooks';

import { getOffers } from '../../store/app-data/selectors';
import { changeCity } from '../../store/app-process/app-process';
import { getCurrentCity } from '../../store/app-process/selectors';

function Locations() {
  const dispatch = useAppDispatch();

  const activeCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  const handleSetActiveLink = (city: string) => {
    const selectedCityOffer = offers.find((offer) => offer.city.name === city);

    if (selectedCityOffer) {
      dispatch(changeCity(selectedCityOffer.city));
    }
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                activeCity.name === city ? 'tabs__item--active' : ''
              }`}
              href="#todo"
              onClick={() => handleSetActiveLink(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Locations;
