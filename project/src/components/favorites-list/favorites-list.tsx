import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';

type FavoritesListProps = {
  favoriteOffers: Offer[];
  setActiveCard: (id: number | null) => void;
};

function FavoritesList({ favoriteOffers, setActiveCard }: FavoritesListProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.map((offer) => (
              <PlaceCard
                key={offer.id}
                cardType="favorites"
                offer={offer}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Cologne</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <article className="favorites__card place-card">
              <div className="favorites__image-wrapper place-card__image-wrapper">
                <a href="#todo">
                  <img
                    className="place-card__image"
                    src="img/apartment-small-04.jpg"
                    width="150"
                    height="110"
                    alt="Place"
                  />
                </a>
              </div>
              <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">
                      &#47;&nbsp;night
                    </span>
                  </div>
                  <button
                    className="place-card__bookmark-button place-card__bookmark-button--active button"
                    type="button"
                  >
                    <svg
                      className="place-card__bookmark-icon"
                      width="18"
                      height="19"
                    >
                      <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#todo">White castle</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FavoritesList;
