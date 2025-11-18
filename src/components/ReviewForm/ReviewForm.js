import { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = (e) => {
    e.preventDefault();
    alert(`Thank you, ${reviewerName}! You rated ${rating} star(s) ⭐`);
    setReviewerName("");
    setRating(0);
    setReviewText("");
  };

  return (
    <section className="review-form">
      <h3>Leave a Review</h3>

      <form onSubmit={handleSubmitReview} encType="multipart/form-data">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          required
        />

        {/* Rating */}
        <div className="rating">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star active" : "star"}
              onClick={() => setRating(star)}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Review Text */}
        <textarea
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />

        {/* Optional Image */}
        <label className="file-label">Upload Image (optional):</label>
        <input type="file" accept="image/*" />

        {/* Submit */}
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default ReviewForm;
