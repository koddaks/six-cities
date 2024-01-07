import { MouseEventHandler } from 'react';
import { FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';
import { getOffers } from '../../store/app-data/selectors';
import { getCurrentCity, getSortType } from '../../store/app-process/selectors';
import { sortOffers } from '../../utils/sortOffers';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  setActiveCard: (id: number | null) => void;
};

const PlacesCardList = ({ setActiveCard }: PlacesCardListProps) => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getSortType);
  const offersByActiveCity = offers.filter(
    (offer) => offer.city.name === activeCity.name
  );

  const sortedOffersBySortType = sortOffers(offersByActiveCity, sortType);

  const handleSetFavorite = (IsStatusFavorite: boolean, offerId: number): MouseEventHandler<HTMLButtonElement> => (event) => {
    event.preventDefault();

    dispatch(postFavoriteAction([ IsStatusFavorite ? FavoriteStatus.Favorite : FavoriteStatus.NotFavorite , offerId]));

  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffersBySortType.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setFavorite={handleSetFavorite}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
};

export default PlacesCardList;
