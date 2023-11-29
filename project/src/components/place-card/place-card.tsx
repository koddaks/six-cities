import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import { AppRoute } from '../../const';

export type PlaceCardProps = {
  offer: Offer;
  setActiveCard?: (id: number | null) => void;
  cardType?: 'cities' | 'favorites' | 'nearPlaces';
  onCardClick?: () => void;
};

export const PLACE_CARD_CLASS_NAMES_MAP = {
  cities: {
    article: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
  },
  nearPlaces: {
    article: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
  },
  favorites: {
    article: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
  },
};

function PlaceCard({
  offer,
  setActiveCard,
  cardType = 'cities',
  onCardClick,
}: PlaceCardProps): JSX.Element {
  const { premium, src, value, isFavorite, housingType, cardName, rating, id } =
    offer;

  const articleClassNames = PLACE_CARD_CLASS_NAMES_MAP[cardType]?.article;
  const imageWrapperClassNames =
    PLACE_CARD_CLASS_NAMES_MAP[cardType]?.imageWrapper;

  const handleMouseOver = () => {
    if(setActiveCard) {
      setActiveCard(id);
    }
  };

  const handleMouseLeave = () => {
    if(setActiveCard) {
      setActiveCard(id);
    }
  };

  return (
    <article
      className={`${articleClassNames} place-card`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClassNames} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Property}/${id}`}>
          <img
            className="place-card__image"
            src={src}
            style={{
              width: cardType === 'favorites' ? '150px' : '260px',
              height: cardType === 'favorites' ? '110px' : '200px',
            }}
            alt="Place view"
          />
        </Link>
      </div>
      <div
        className={`${
          cardType === 'favorites' ? 'favorites__card-info' : ''
        } place-card__info`}
      >
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
          <Link to={`${AppRoute.Property}/${id}`}>{cardName}</Link>
        </h2>
        <p className="place-card__type">{housingType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
