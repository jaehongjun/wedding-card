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
import FlowerAnimation from "../FlowerAnimation";

const Greeting = () => {
  return (
    <div className="wrapper">
      <FlowerAnimation/>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} plain>
        <p className="title" data-aos="fade-up">초대합니다</p>
      </Divider>
      <img className="image" data-aos="fade-up" src={Flower} alt="flower" />
      <p className="content" data-aos="fade-up">
      서로에게 작은 빛이 되어 걸어온 시간들,
      <br />
      <br />
      이제는 같은 꿈을 바라보며
      <br />
      <br />
      더 큰 사랑으로 함께하려 합니다.
      <br />
      <br />
      저희가 걸어갈 길이 따뜻한 축복으로
      <br />
      <br />
      가득 채워지길 바라며,
      <br />
      <br />
      소중한 발걸음을 함께해 주시면 감사하겠습니다.
      </p>
      <p className="groom-bride" data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 <span style={{display:'inline-block', textAlign:'right', width:'48px'}}>아들</span> {GROOM_NAME.substring(1)}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 <span style={{display:'inline-block', textAlign:'right', width:'48px'}}>딸</span> {BRIDE_NAME.substring(1)}
      </p>
    </div>
  );
};

export default Greeting;
