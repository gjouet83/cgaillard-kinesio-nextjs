import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="star-container">
      {[...Array(5)].map((_, index) => {
        const starFill = Math.min(Math.max(rating - index, 0), 1) * 100;

        return (
          <div
            key={index}
            className="star"
            style={{ '--star-fill': `${starFill}%` }}
          >
            ★
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
