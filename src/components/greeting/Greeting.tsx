import React from "react";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../Constants";
import Flower from "../../assets/Sakura_Flower.png";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div className="wrapper">
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <p className="title" data-aos="fade-up">초대합니다</p>
      </Divider>
      <img className="image" data-aos="fade-up" src={Flower} alt="flower" />
      <p className="content" data-aos="fade-up">
        서로 마주 보며 다져온 사랑을
        <br />
        <br />
        이제 함께 한곳을 바라보며 걸어갈 수 있는
        <br />
        <br />
        큰 사랑으로 키우고자 합니다.
        <br />
        <br />
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
        <br />
        <br />
        앞날을 축복해 주시면 감사하겠습니다.
      </p>
      <p className="groom-bride" data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </p>
    </div>
  );
};

export default Greeting;
