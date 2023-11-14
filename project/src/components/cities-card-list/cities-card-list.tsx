import React from 'react';
import CitiesCard, { CitiesCardProps } from '../cities-card/cities-card';

export const citiesCardData: CitiesCardProps[] = [
  {
    premium: true,
    src: 'img/apartment-01.jpg',
    value: 120,
    bookmark: true,
    housingType: 'Apartment',
    cardName: 'Beautiful & luxurious apartment at great location',
    cardLink: '#',
    rating: 80,
  },
  {
    premium: true,
    src: 'img/room.jpg',
    value: 80,
    bookmark: true,
    housingType: 'Private room',
    cardName: 'Wood and stone place',
    cardLink: '#',
    rating: 80,
  },
  {
    premium: true,
    src: 'img/apartment-02.jpg',
    value: 132,
    bookmark: false,
    housingType: 'Apartment',
    cardName: 'Canal View Prinsengracht',
    cardLink: '#',
    rating: 80,
  },
  {
    premium: true,
    src: 'img/apartment-03.jpg',
    value: 180,
    bookmark: false,
    housingType: 'Apartment',
    cardName: 'Nice, cozy, warm big bed apartment',
    cardLink: '#',
    rating: 100,
  },
  {
    premium: true,
    src: 'img/room.jpg',
    value: 80,
    bookmark: true,
    housingType: 'Private room',
    cardName: 'Wood and stone place',
    cardLink: '#',
    rating: 80,
  },
];

const CitiesCardList: React.FC = () => (
  <div className="cities__places-list places__list tabs__content">
    {citiesCardData.map((cityCard: CitiesCardProps, index: number) => (
      <CitiesCard
        key={index++}
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
