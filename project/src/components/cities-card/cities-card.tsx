export type CitiesCardProps = {
  premium: boolean;
  src: string;
  value: number;
  bookmark: boolean;
  housingType: string;
  cardName: string;
  cardLink: string;
  rating: number;
};

function CitiesCard(props: CitiesCardProps): JSX.Element {
  const {
    premium,
    src,
    value,
    bookmark,
    housingType,
    cardName,
    cardLink,
    rating,
  } = props;
  return (
    <article className="cities__card place-card">
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={cardLink}>
          <img
            className="place-card__image"
            src={src}
            width="260"
            height="200"
            alt="Place view"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              bookmark ? 'place-card__bookmark-button--active' : ''
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
          <a href={cardLink}>{cardName}</a>
        </h2>
        <p className="place-card__type">{housingType}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
