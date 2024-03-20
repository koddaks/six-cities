import React from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';

function Reviews() {
  return (
    <section className="property__reviews reviews">
      <ReviewsList />
      <ReviewsForm />
    </section>
  );
}
export default React.memo(Reviews);
