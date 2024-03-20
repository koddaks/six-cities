import React, { useEffect, useState } from 'react';
import { Review } from '../../types';
import ReviewsItem from '../reviews-item/reviews-item';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/app-data/selectors';

function ReviewsList() {
  const reviews = useAppSelector(getReviews);
  const [visibleItems, setVisibleItems] = useState(10);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  useEffect(() => {
    if (Array.isArray(reviews)) {
      const sortedReviews = reviews
        .slice()
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      setFilteredReviews(sortedReviews.slice(0, visibleItems));
    } else {
      setFilteredReviews([]);
    }
  }, [reviews, visibleItems]);

  const hasMoreReviews =
    Array.isArray(reviews) && visibleItems < reviews.length;

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews?.length}</span>
      </h2>
      <ul className="reviews__list">
        {Array.isArray(filteredReviews)
          ? filteredReviews.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))
          : null}
      </ul>
      {hasMoreReviews && (
        <button
          className="near-places__button"
          style={{ width: '30%', display: 'flex', minWidth: '200px' }}
          onClick={handleLoadMore}
        >
          <svg
            height="20px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 483.049 483.049"
            xmlSpace="preserve"
          >
            <g>
              <polygon
                style={{ fill: '#005ECE;' }}
                points="0,121.155 241.524,361.894 241.524,121.155 	"
              />
              <polygon
                style={{ fill: '#2488FF;' }}
                points="241.524,121.155 241.524,361.894 483.049,121.155 	"
              />
            </g>
          </svg>
        </button>
      )}
    </>
  );
}

export default React.memo(ReviewsList);
