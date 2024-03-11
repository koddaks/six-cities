import { Offer } from '../../types';
import Pagination from '../pagination/paginaion';
import PlaceCard from '../place-card/place-card';

type NearPlacesProps = {
  offers?: Offer[] | undefined;
  onSetActiveCard(id: number | null): void;
  onSetFavorite: (isFavorite: boolean, offerId: number) => void;
  offersPerPage: number;
  onPageClick: (pageNumber:number) => void;
  currentPage: number
};

function NearPlaces({
  offers,
  onSetActiveCard,
  onSetFavorite,
  offersPerPage,
  onPageClick,
  currentPage

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
      <Pagination offersPerPage={offersPerPage} onPageClick={onPageClick} currentPage={currentPage}/>
    </section>
  );
}

export default NearPlaces;
