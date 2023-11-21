import { useState } from 'react';
import { Offer } from '../../types';
import PlaceCard from '../cities-card/place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type PlacesCardListProps = {
  offers: Offer[];
};

const PlacesCardList = ({ offers }: PlacesCardListProps) => {
  const [activeCardId, setActiveCardID] = useState<number | null>(null);

  const handleSetActiveCard = (id: number) => {
    setActiveCardID(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Link key={offer.id} to={`${AppRoute.Property}/${offer.id}`}>
          <PlaceCard
            key={offer.id}
            offer={offer}
            setActiveCard={handleSetActiveCard}
            isActive={activeCardId === offer.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default PlacesCardList;
