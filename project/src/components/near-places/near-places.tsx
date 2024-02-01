import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';

type NearPlacesProps = {
  offers?: Offer[] | undefined;
  onSetActiveCard(id: number | null): void;
  onSetFavorite: (isFavorite: boolean, offerId: number) => void;
  onLoadMore: () => void;
};

function NearPlaces({
  offers,
  onSetActiveCard,
  onSetFavorite,
  onLoadMore,
}: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers &&
          offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onSetActiveCard={onSetActiveCard}
              cardType="nearPlaces"
              onSetFavorite={onSetFavorite}
            />
          ))}
      </div>
      <button className="near-places__button" onClick={onLoadMore}>
        <span>Load More</span>
      </button>
    </section>
  );
}

export default NearPlaces;
