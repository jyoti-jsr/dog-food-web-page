import "./style.css";

export default function VetsSuggestion() {
  return (
    <div className="vetsuggestion-container">
      <div className="vetsuggestion-header">
        The best Vets will always
        <br /> suggest you our product
      </div>
      <div className="vetsuggestion-card">
        <div className="vetsuggestion-card-left">
          <div className="doctor-desc-card-container">
            <div className="doctor-desc-card card-1">
              <div className="doctor-desc-card-img">
                <img src="./images/vet-1.png" alt="" />
              </div>
              <div className="doctor-desc-card-desc">
                <div className="doctor-name">Dr. Lizzy Fan</div>
                <div className="doctor-title">Lorenz Farma</div>
              </div>
            </div>
            <div className="doctor-desc-card card-2">
              <div className="doctor-desc-card-img">
                <img src="./images/vet-2.png" alt="" />
              </div>
              <div className="doctor-desc-card-desc">
                <div className="doctor-name">Dr. Lizzy Fan</div>
                <div className="doctor-title">Lorenz Farma</div>
              </div>
            </div>
            <div className="doctor-desc-card card-3">
              <div className="doctor-desc-card-img">
                <img src="./images/vet-3.png" alt="" />
              </div>
              <div className="doctor-desc-card-desc">
                <div className="doctor-name">Dr. Lizzy Fan</div>
                <div className="doctor-title">Lorenz Farma</div>
              </div>
            </div>
          </div>
        </div>
        <div className="vetsuggestion-card-right">
          <div className="vetsuggestion-card-right-header">
            One of the most exciting innovations
            <br /> in pet food
          </div>
          <div className="vetsuggestion-card-right-rating">
            <img src="./images/vetstar-rating.png" alt="" />
          </div>
          <div className="vetsuggestion-card-right-desc">
            “One of the most exciting innovations in pet food, The Farmer’s Dog
            is a safe alternative to conventional brands.One of the most
            exciting innovations in pet food, The Farmer’s Dog is a safe
            alternative to conventional brands. One of the most exciting
            innovations in pet food, The Farmer’s Dog is a safe alternative ”
          </div>
        </div>
      </div>
    </div>
  );
}
