import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';

type NearPlacesProps = {
  offers?: Offer[] | undefined;
  setActiveCard(id: number | null): void;
  setFavorite: (
    isFavorite: boolean,
    offerId: number
  ) => void;
};

function NearPlaces({ offers, setActiveCard, setFavorite }: NearPlacesProps) {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers &&
          offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              setActiveCard={setActiveCard}
              cardType="nearPlaces"
              setFavorite={setFavorite}
            />
          ))}
      </div>
    </section>
  );
}

export default NearPlaces;
