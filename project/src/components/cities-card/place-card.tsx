import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import { AppRoute } from '../../const';

export type PlaceCardProps = {
  offer: Offer;
  onCardHover: (id: number | null) => void;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { premium, src, value, isFavorite, housingType, cardName, rating, id } =
    props.offer;

  const handleMouseOver = () => {
    props.onCardHover(id);
  };

  const handleMouseLeave = () => {
    props.onCardHover(null);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link key={id} to={`${AppRoute.Property}/${id}`}>
          <img
            className="place-card__image"
            src={src}
            width="260"
            height="200"
            alt="Place view"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link key={id} to={`${AppRoute.Property}/${id}`}>
            {cardName}
          </Link>
        </h2>
        <p className="place-card__type">{housingType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
