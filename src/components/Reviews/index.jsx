import "./style.css";
export default function Reviews() {
  return (
    <div className="reviews-container" id="reviews">
      <div className="reviews-container-header">
        Our customers reviews for our
        <br /> food delivery satisfaction
      </div>
      <div className="reviews-container-subheader">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
      <div className="reviews-cards-container">
        <div className="reviews-card-comment">
          <div className="reviews-star">
            <img src="./images/reviews-star.png" alt="" />
          </div>
          <div className="reviews-reviewer">Juliana C.</div>
          <div className="reviews-reviewer-highlight">
            “One of the most exciting innovations in pet food,
          </div>
          <div className="reviews-reviewer-comment">
            “One of the most exciting innovations in pet food, The Farmer’s Dog
            is a safe alternative to conventional brands.One of the most
            exciting innovations in pet food, The Farmer’s Dog is a safe
            alternative
          </div>
        </div>
        <div className="reviews-full-card">
          {/* <img src="./images/reviewers-full-card.png" alt="full-card" /> */}
        </div>
        <div className="reviews-card-img"></div>
      </div>
    </div>
  );
}
