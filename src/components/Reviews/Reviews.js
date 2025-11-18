import React, { useState } from "react";
import "./Reviews.css";

const allReviews = [
  { name: "Saurabh", rating: 5, text: "Authentic Gangajal with quick delivery. Very satisfied with the quality!" },
  { name: "Sumit Kumar", rating: 4, text: "Good experience overall, will order again. Packing could be improved." },
  { name: "Akash S.", rating: 5, text: "Pure and high-quality Gangajal delivered right to my doorstep." },
  { name: "Nisha", rating: 5, text: "Fast delivery and excellent product quality." },
  { name: "Rohan", rating: 4, text: "Satisfied with the purity, plan to reorder." },
  { name: "Anita", rating: 5, text: "Very trustworthy site for Gangajal." },
  { name: "Manoj", rating: 3, text: "Price is a bit high but quality is good." },
  { name: "Pooja", rating: 5, text: "Excellent packaging and genuine product." },
  { name: "Vikram", rating: 4, text: "Good shopping experience and timely delivery." },
  { name: "Sunita", rating: 5, text: "Highly recommended for authentic Gangajal." },
];

const Reviews = () => {
  const [reviewsToShow, setReviewsToShow] = useState(3);

  const handleViewMore = () => setReviewsToShow(prev => prev + 3);

  const visibleReviews = allReviews.slice(0, reviewsToShow);
  const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

  return (
    <section >
      <h1 className="about-heading">Customer Reviews & Ratings</h1>
      <div className="reviews" id="reviews" aria-label="Customer reviews and ratings">
        <div className="rating-summary">⭐ {avgRating.toFixed(1)} / 5.0 based on {allReviews.length} reviews</div>

        <div className="review-list">
          {visibleReviews.map((review, index) => (
            <article key={index}>
              <p className="review-header">
                {review.name}
                <span className="review-stars">
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </span>
                <span className="verified">✔ Verified Purchase</span>
              </p>
              <p>{review.text}</p>
            </article>

          ))}
        </div>

        {reviewsToShow < allReviews.length && (
          <div className="view-more-btn">
            <button onClick={handleViewMore}>View More Reviews</button>
          </div>
        )}
      </div>
    </section>

  );
};

export default Reviews;
