import { useState } from 'react';
import { Offer } from '../../types';
import PlaceCard from '../cities-card/place-card';

type PlacesCardListProps = {
  offers: Offer[];
};

const PlacesCardList = ({ offers }: PlacesCardListProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSetActiveCard = (id: number) => {
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setActiveCard={handleSetActiveCard}
          isActive={activeCard === offer.id}
        />
      ))}
    </div>
  );
};

export default PlacesCardList;
