import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/app-data/selectors';
import { getCurrentCity, getSortType } from '../../store/app-process/selectors';
import { sortOffers } from '../../utils/sortOffers';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  setActiveCard: (id: number | null) => void;
};

const PlacesCardList = ({ setActiveCard }: PlacesCardListProps) => {
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getSortType);
  const offersByActiveCity = offers.filter(
    (offer) => offer.city.name === activeCity.name
  );

  const sortedOffersBySortType = sortOffers(offersByActiveCity, sortType);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffersBySortType.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
};

export default PlacesCardList;
