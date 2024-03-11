import { useAppSelector } from '../../hooks';
import { getIsLoading, getOffersNearby } from '../../store/app-data/selectors';
import { Offer } from '../../types';
import Pagination from '../pagination/paginaion';
import PlaceCard from '../place-card/place-card';
import Spinner from '../spinner/spinner';

type NearPlacesProps = {
  offers?: Offer[] | undefined;
  onSetActiveCard(id: number | null): void;
  onSetFavorite: (isFavorite: boolean, offerId: number) => void;
  offersPerPage: number;
  onPageClick: (pageNumber:number) => void;
};

function NearPlaces({
  offers,
  onSetActiveCard,
  onSetFavorite,
  offersPerPage,
  onPageClick,

}: NearPlacesProps) {
  const isLoading = useAppSelector(getIsLoading);

  if (isLoading) {
    <Spinner/>
  }

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
      <Pagination offersPerPage={offersPerPage} onPageClick={onPageClick}/>
    </section>
  );
}

export default NearPlaces;
