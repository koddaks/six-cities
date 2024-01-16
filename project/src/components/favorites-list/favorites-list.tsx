import { useAppDispatch } from '../../hooks';
import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';
import { postFavoriteAction } from '../../store/api-actions';
import { FavoriteStatus } from '../../const';

type FavoritesListProps = {
  favoriteOffers: Offer[];
};

function FavoritesList({ favoriteOffers }: FavoritesListProps) {
  const dispatch = useAppDispatch();

  const handleSetFavorite = (isFavorite: boolean, offerId: number) => {
    const newFavoriteStatus = isFavorite
      ? FavoriteStatus.NotFavorite
      : FavoriteStatus.Favorite;

    dispatch(
      postFavoriteAction([
        newFavoriteStatus,
        offerId,
      ])
    );
  };

  const citiesOfFavoriteOffers = new Set(
    favoriteOffers.map((offer) => offer.city.name)
  );

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {[...citiesOfFavoriteOffers].map((city) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#todo">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoriteOffers.map((offer) =>
                city === offer.city.name ? (
                  <PlaceCard
                    key={offer.id}
                    cardType="favorites"
                    offer={offer}
                    setFavorite={handleSetFavorite}
                  />
                ) : null
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoritesList;
