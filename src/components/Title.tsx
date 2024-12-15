import React from "react";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../Constants";
import "./Title.css"; // CSS 파일 가져오기

const Title = () => {
  return (
    <div className="layout">
      <div className="title-wrapper">
        <p className="wedding-invitation">WEDDING INVITATION</p>
        <p className="groom-bride">
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </p>
        <p className="schedule">
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </p>
      </div>
    </div>
  );
};

export default Title;
