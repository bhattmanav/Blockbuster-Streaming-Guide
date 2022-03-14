import React from "react";
import "./Reviews.css";
function Reviews({ reviews }) {
  return (
    <div className="reviews-wrapper">
      {reviews.length > 0 && <h4 className="reviews__title">Reviews</h4>}
      <div className="review-container">
        {reviews.map((review) => {
          return (
            <div className="review">
              <div className="review__user-details">
                <span className="review__rating">
                  {review.author_details.rating === null
                    ? "NA"
                    : review.author_details.rating}
                  <span className="review__total-rating">/10</span>
                </span>
                <span className="review__author">
                  {review.author_details.username}
                </span>
                <span className="review__date">
                  {review.created_at.substring(0, 10)}
                </span>
              </div>
              <div className="review__desc">
                <span className="review__title">{`A review by ${review.author}`}</span>
                <p className="review__user-desc">{review.content}</p>
                <div className="review__helpful">
                  <span className="review__helpful-text">
                    Was this review helpful to you?
                  </span>
                  <span className="review__helpful-yes">Yes</span>
                  <span className="review__helpful-no">No</span>
                  <span className="review__helpful-report">Report</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
