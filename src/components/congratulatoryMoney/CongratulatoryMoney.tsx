import React, { useState } from "react";
import { Button, Divider, message, Modal,Collapse, Space } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../../assets/Sakura_Flower.png";
import KakaoPay from "../../assets/payment_icon_yellow_small.png";
import "./CongratulatoryMoney.css";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
  GROOM_KAKAO_ACCOUNT_NUMBER,
  BRIDE_KAKAO_ACCOUNT_NUMBER,
} from "../../Constants";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  const onKakaoPay = (kakaoCode:string) => {
    window.open(`https://qr.kakaopay.com/${kakaoCode}`);
  }

  return (
    <div className="wrapper">
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 16 }}
      >
        <p className="title">축하의 마음을 전하세요</p>
      </Divider>
      <img src={Flower} alt="flower" className="image" />
      <p className="content" data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </p>

    <div>
      <Space direction="vertical" style={{ width: '70%', marginBottom:'10px' }} >
        <Collapse collapsible="header" defaultActiveKey={['0']} >
          <Collapse.Panel header="신랑측 계좌번호 확인" key="1" style={{textAlign:'center'}}>
          <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <b style={{marginRight:'10px'}}>신랑 {GROOM_NAME}</b>
              <img src={KakaoPay} alt="kakao_pay" style={{width:'50px'}} onClick={() => onKakaoPay(GROOM_KAKAO_ACCOUNT_NUMBER)} />
            </div>
            <Divider type="vertical" />
            <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
              <Button
                type="text"
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {GROOM_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          </Collapse.Panel>
        </Collapse>
      </Space>

      <Space direction="vertical" style={{ width: '70%', marginBottom:'10px' }}>
        <Collapse collapsible="header" defaultActiveKey={['0']}>
          <Collapse.Panel header="신부측 계좌번호 확인" key="1" style={{textAlign:'center'}}>
          <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <b style={{marginRight:'10px'}}>신부 {BRIDE_NAME}</b>
              <img src={KakaoPay} alt="kakao_pay" style={{width:'50px'}} onClick={() => onKakaoPay(BRIDE_KAKAO_ACCOUNT_NUMBER)}/> 
            </div>
            <Divider type="vertical" />
            <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
              <Button
                type="text"
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {BRIDE_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          </Collapse.Panel>
        </Collapse>
      </Space>
      <p className="description">
        계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
      </p>
    </div>
    </div>
  );
};

export default CongratulatoryMoney;
