import { useState } from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getReviewsbyIdAction,
  postReviewAction,
} from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../store/app-data/selectors';
import ReviewRating from '../review-rating/review-rating';

function Reviews() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const minCommentLength = 50;
  const submitIsEnabled = comment.length >= minCommentLength && rating !== 0;
  const { id } = useParams<{ id: string }>();
  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRating(value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setComment(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event
  ) => {
    event.preventDefault();
    if (id) {
      dispatch(postReviewAction([{ comment, rating }, id]));
      dispatch(getReviewsbyIdAction(id));
      setComment('');
      setRating(0);
    }
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews?.length}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      <form
        onSubmit={handleSubmit}
        className="reviews__form form"
        action="#"
        method="post"
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <ReviewRating rating={rating} handleRatingChange={handleRatingChange} />
        <textarea
          onChange={handleCommentChange}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={comment}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!submitIsEnabled}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default Reviews;
