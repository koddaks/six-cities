import { Offer } from '../../types';
import PlaceCard from '../cities-card/place-card';

type PlacesCardListProps = {
  offers: Offer[];
  setActiveCard: (id: number | null) => void;
};

const PlacesCardList = ({ offers, setActiveCard }: PlacesCardListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
    ))}
  </div>
);

export default PlacesCardList;
