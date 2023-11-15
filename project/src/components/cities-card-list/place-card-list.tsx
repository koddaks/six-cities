import PlaceCard, { PlaceCardProps } from '../cities-card/place-card';

type PlacesCardListProps = {
  cards: PlaceCardProps[];
};

const PlacesCardList = ({ cards }: PlacesCardListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {cards.map((card) => (
      <PlaceCard
        key={card.src}
        {...card}
      />
    ))}
  </div>
);

export default PlacesCardList;
