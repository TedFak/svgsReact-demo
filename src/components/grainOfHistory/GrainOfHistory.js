import "./style.css";

import img1 from "../../img/homePagePics/homePic1.jpg";
import img2 from "../../img/homePagePics/homePic2.jpg";
import img3 from "../../img/homePagePics/homePic3.jpg";

const GrainOfHistory = () => {
  return (
    <>
      <h2 className="title">Grain of History</h2>
      <div className="container__content">
        <div className="content">
          <img src={img1} className="content-img" alt="studio" />
          <div className="content-text">
            <p>
              String theory posits that all matter consists of very small
              entities that behave like tiny vibrating strings.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="content-text">
            <p>
              Actually, the gang's gotten a bit bigger since the last time you
              saw us.
            </p>
          </div>
          <img src={img2} className="content-img" alt="squad" />
        </div>
        <div className="content">
          <img src={img3} className="content-img" alt="cowboy" />
          <div className="content-text">
            <p>See You Space Cowboy...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrainOfHistory;
