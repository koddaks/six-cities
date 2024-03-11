import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import {
  getReviewsbyIdAction,
  postReviewAction,
} from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import ReviewRating from '../review-rating/review-rating';

function ReviewsForm() {
  const { id } = useParams<{ id: string }>();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const minCommentLength = 50;
  const submitIsEnabled = comment.length >= minCommentLength && rating !== 0;
  const dispatch = useAppDispatch();

  const handleRatingChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setRating(value);
    },
    []
  );

  const handleCommentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setComment(value);
    },
    []
  );

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
  );
}

export default ReviewsForm;
