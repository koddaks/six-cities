import { APIRoute, FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';
import { getOffers } from '../../store/app-data/selectors';
import { getCurrentCity, getSortType } from '../../store/app-process/selectors';
import { sortOffers } from '../../utils/sortOffers';
import PlaceCard from '../place-card/place-card';
import { getAuthLogInStatus } from '../../store/user-process/selectors';
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
  const isUserLoggedIn = useAppSelector(getAuthLogInStatus);
  const offersByActiveCity = offers.filter(
    (offer) => offer.city.name === activeCity.name
  );
  const navigate = useNavigate();

  const sortedOffersBySortType = sortOffers(offersByActiveCity, sortType);

  const handleSetFavorite = (isFavorite: boolean, offerId: number) => {
    if (!isUserLoggedIn) {
      toast.warn('You must log in or register to add to favorites.');
      navigate(APIRoute.Login);
    } else {
      dispatch(
        postFavoriteAction([
          !isFavorite ? FavoriteStatus.Favorite : FavoriteStatus.NotFavorite,
          offerId,
        ])
      );
    }
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
