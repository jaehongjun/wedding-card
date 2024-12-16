import React from "react";
import GreyPicture from "../../assets/gray-picture.png";
import "./Quote.css";

const Quote = () => {
  return (
      <section
      id="photo-paragraph-section"
      className="photo-paragraph-section base-section"
    >
      <div className="photo-paragraph-area">
        <div className="photo-container">
          <img
            src={GreyPicture}
            alt="Background"
            className="photo-img"
            draggable="false"
          />
        </div>
        <div className="text-overlay">
          <p>너를 만난 뒤, 모든 것이 달라졌다.</p> <p>바람은 더 부드럽고, 하늘은 더 푸르렀다.</p> <p>그리고 나는 깨달았다.</p> <p>이것이 사랑이라는 것을.</p> <p>- 정현주, 《사랑이 온다》</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
