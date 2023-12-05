import { useAppSelector } from '../../hooks';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  setActiveCard: (id: number | null) => void;
};

const PlacesCardList = ({ setActiveCard }: PlacesCardListProps) => {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city.name);
  const offersByActiveCity = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersByActiveCity.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
};

export default PlacesCardList;
