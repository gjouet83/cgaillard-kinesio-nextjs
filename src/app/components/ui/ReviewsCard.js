import StarRating from './StarRating';

const ReviewsCard = ({ text, author, rating }) => {
  return (
    <div className="home__googleReviews__card">
      <div className="home__googleReviews__card__authorContainer">
        <span className="home__googleReviews__card__authorContainer__author">
          {author}
        </span>
        <StarRating rating={rating} />
      </div>
      <p className="home__googleReviews__card__text">{text}</p>
    </div>
  );
};

export default ReviewsCard;
