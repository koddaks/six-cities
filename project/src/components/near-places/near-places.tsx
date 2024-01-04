import React from 'react';
import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';

type NearPlacesProps = {
  offers?: Offer[] | undefined;
  setActiveCard(id: number | null): void;
};

function NearPlaces({ offers, setActiveCard }: NearPlacesProps) {
  const handleCardClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
