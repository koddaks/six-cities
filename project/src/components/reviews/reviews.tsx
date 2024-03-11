import React from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getReviewsbyIdAction,
  postReviewAction,
} from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../store/app-data/selectors';
import ReviewRating from '../review-rating/review-rating';
import ReviewsForm from '../reviews-form/reviews-form';

function Reviews() {
  const reviews = useAppSelector(getReviews);
  console.log('rerender');





  return (
    <section className="property__reviews reviews">
      <ReviewsList/>
      <ReviewsForm/>
    </section>
  );
}
export default React.memo(Reviews);
