import { MouseEventHandler } from 'react';
import { APIRoute, AuthorizationStatus, FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';
import { getOffers } from '../../store/app-data/selectors';
import { getCurrentCity, getSortType } from '../../store/app-process/selectors';
import { sortOffers } from '../../utils/sortOffers';
import PlaceCard from '../place-card/place-card';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type PlacesCardListProps = {
  setActiveCard: (id: number | null) => void;
};

const PlacesCardList = ({ setActiveCard }: PlacesCardListProps) => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getSortType);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offersByActiveCity = offers.filter(
    (offer) => offer.city.name === activeCity.name
  );
  const navigate = useNavigate();

  const sortedOffersBySortType = sortOffers(offersByActiveCity, sortType);

  const handleSetFavorite = (IsStatusFavorite: boolean, offerId: number): MouseEventHandler<HTMLButtonElement> => (event) => {
    event.preventDefault();
    authorizationStatus === AuthorizationStatus.NoAuth && toast.warn('You must log in or register to add to favorites.');
    authorizationStatus === AuthorizationStatus.Auth
      ? dispatch(postFavoriteAction([!IsStatusFavorite ? FavoriteStatus.Favorite : FavoriteStatus.NotFavorite, offerId]))
      : navigate(APIRoute.Login);
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
