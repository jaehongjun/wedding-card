import React from "react";
import Flower from "../../assets/Sakura_Flower.png";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="quote-wrapper">
      <img src={Flower} alt="flower" className="quote-image" data-aos="fade-up" />
      <span className="quote-content" data-aos="fade-up">
        장담하건대. 세상이 다 겨울이어도
        <br />
        우리 사랑은 늘봄처럼 따뜻하고
        <br />
        간혹, 여름처럼 뜨거울 겁니다
        <br />
        <br />
        - 이수동, (사랑가) -
        <br />
        <br />
      </span>
    </div>
  );
};

export default Quote;
