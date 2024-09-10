/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReviewsCard from '../../components/ui/ReviewsCard';
import reviewsData from '../../components/datas/reviewsData';
import StarRating from '@/app/components/ui/StarRating';

const Reviews = () => {
  // Fonction pour calculer la moyenne des notes
  const calculateAverageRating = (reviews) => {
    const totalRating = reviews.reduce(
      (sum, review) => sum + parseFloat(review.rating),
      0
    );
    return totalRating / reviews.length;
  };

  // Calcul de la moyenne des notes
  const averageRating = calculateAverageRating(reviewsData);

  return (
    <section className="home__reviews">
      <div className="home__reviews__titleContainer">
        <h2 className="home__reviews__titleContainer__title">
          Ce qu'ils en ont pensé. Extraits des {reviewsData.length} avis Google
        </h2>
        <span className="home__reviews__titleContainer__averageRating">
          Moyenne des notes: {averageRating.toFixed(1)}
        </span>
        <div className="home__reviews__titleContainer__starContainer">
          <StarRating rating={averageRating} />
        </div>
      </div>
      <div className="home__reviews__cardsContainer">
        {reviewsData.map((review, index) => (
          <ReviewsCard
            key={index}
            text={review.text}
            author={review.author}
            rating={review.rating}
            link={review.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
