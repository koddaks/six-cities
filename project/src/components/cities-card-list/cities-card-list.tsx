import CitiesCard, { CitiesCardProps } from '../cities-card/cities-card';


type CitiesCardListProps = {
  cards: CitiesCardProps[];
};

const CitiesCardList = ({ cards }: CitiesCardListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {cards.map((cityCard) => (
      <CitiesCard
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

export default CitiesCardList;
