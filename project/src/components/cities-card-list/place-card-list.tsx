import PlaceCard, { PlaceCardProps } from '../cities-card/place-card';

type PlacesCardListProps = {
  cards: PlaceCardProps[];
};

const PlacesCardList = ({ cards }: PlacesCardListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {cards.map((cityCard) => (
      <PlaceCard
        key={cityCard.src}
        premium={cityCard.premium}
        src={cityCard.src}
        value={cityCard.value}
        bookmark={cityCard.bookmark}
        housingType={cityCard.housingType}
        cardName={cityCard.cardName}
        cardLink={cityCard.cardLink}
        rating={cityCard.rating}
      />
    ))}
  </div>
);

export default PlacesCardList;
