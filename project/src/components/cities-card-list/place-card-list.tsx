import { Offer } from '../../types';
import PlaceCard from '../cities-card/place-card';

type PlacesCardListProps = {
  offers: Offer[];
  onCardHover: (id: number | null) => void;
};

const PlacesCardList = ({ offers, onCardHover }: PlacesCardListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <PlaceCard key={offer.id} offer={offer} onCardHover={onCardHover} />
    ))}
  </div>
);

export default PlacesCardList;
