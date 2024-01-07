import React, { MouseEventHandler } from 'react';
import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';
import { FavoriteStatus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';

type NearPlacesProps = {
  offers?: Offer[] | undefined;
  setActiveCard(id: number | null): void;
};

function NearPlaces({ offers, setActiveCard }: NearPlacesProps) {
  const dispatch = useAppDispatch();
  const handleCardClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const handleSetFavorite = (IsStatusFavorite: boolean, offerId: number): MouseEventHandler<HTMLButtonElement> => (event) => {
    event.preventDefault();

    dispatch(postFavoriteAction([ IsStatusFavorite ? FavoriteStatus.Favorite : FavoriteStatus.NotFavorite , offerId]));

  };

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
              onCardClick={handleCardClick}
              setFavorite={handleSetFavorite}
            />
          ))}
      </div>
    </section>
  );
}

export default React.memo(
  NearPlaces,
  (prevProps, nextProps) => prevProps.offers === nextProps.offers
);
