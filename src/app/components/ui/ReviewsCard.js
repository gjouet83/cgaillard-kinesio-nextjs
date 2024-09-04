import StarRating from './StarRating';

const ReviewsCard = ({ text, author, rating, date }) => {
  return (
    <div className="home__googleReviews__card">
      <div className="home__googleReviews__card__authorContainer">
        <p>
          <strong>{author}</strong>
        </p>
        <StarRating rating={rating} />
      </div>

      <p>{text}</p>
      <p>{date}</p>
    </div>
  );
};

export default ReviewsCard;
