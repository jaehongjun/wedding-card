import React from "react";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
  BRIDE_EN_NAME,
  GROOM_EN_NAME,
  WEDDING_TIME,
} from "../../Constants";
import "./Title.css"; // CSS 파일 가져오기
import AnimatedWaves from "../wave";
import AnimatedWavesDown from "../waveDown";
import WeddingTitleImage from "../../assets/image1.png";
import FlowerAnimation from "../FlowerAnimation";

const Title = () => {
  return (
    <>    
    <div className="layout">
      <div className="title-wrapper">
      <div className="names-container">
      <div className="name-item">
        <div className="name-english">
          {BRIDE_EN_NAME}
        </div>
        <div className="name-korean">
          {BRIDE_NAME}
        </div>
      </div>
      <div className="divider"></div>
      <div className="name-item">
        <div className="name-english">
          {GROOM_EN_NAME}
        </div>
        <div className="name-korean">
         {GROOM_NAME}
        </div>
      </div>
    </div>
    <AnimatedWaves />
    <img src={WeddingTitleImage} alt="wedding_title" className="wedding-title" />
        <p className="schedule">
          <b>{WEDDING_DATE}</b>
          <br />
          <b>{WEDDING_TIME}</b>
          <br />
          <br />
          {WEDDING_LOCATION}
        </p>
      </div>
    </div>

    </>
  );
};

export default Title;
