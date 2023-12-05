import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

function Locations() {
  const dispatch = useAppDispatch();

  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  const handleSetActiveLink = (city: string) => {
    const selectedCityOffer = offers.find((offer) => offer.city.name === city);

    if (selectedCityOffer) {
      dispatch(changeCity({ city: selectedCityOffer.city }));
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
