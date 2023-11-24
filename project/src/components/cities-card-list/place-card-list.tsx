import { Offer } from '../../types';
import PlaceCard from '../cities-card/place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type PlacesCardListProps = {
  offers: Offer[];
  onCardHover: (id: number | null) => void;
};

const PlacesCardList = ({ offers, onCardHover }: PlacesCardListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <Link key={offer.id} to={`${AppRoute.Property}/${offer.id}`}>
        <PlaceCard key={offer.id} offer={offer} onCardHover={onCardHover} />
      </Link>
    ))}
  </div>
);

export default PlacesCardList;
