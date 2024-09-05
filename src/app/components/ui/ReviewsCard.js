/* eslint-disable react/no-unescaped-entities */
import StarRating from './StarRating';
import Link from 'next/link';

const ReviewsCard = ({ text, author, rating, link }) => {
  console.log(link);
  return (
    <div className="home__googleReviews__card">
      <div className="home__googleReviews__card__authorContainer">
        <span className="home__googleReviews__card__authorContainer__author">
          {author}
        </span>
        <StarRating rating={rating} />
      </div>
      <q cite={link} className="home__googleReviews__card__text">
        {text}
      </q>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="home__googleReviews__card__link"
      >
        Lire l'avis complet
      </Link>
    </div>
  );
};

export default ReviewsCard;
