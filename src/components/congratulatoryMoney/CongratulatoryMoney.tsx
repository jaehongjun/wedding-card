import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../../assets/Sakura_Flower.png";
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
} from "../../Constants";

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <div className="wrapper">
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <p className="title">축하의 마음을 전하세요</p>
      </Divider>
      <img src={Flower} alt="flower" className="image" />
      <p className="content" data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </p>

      <div className="button-wrap">
        <div
          className="contact-button"
          data-aos="fade-up"
          onClick={() => setGroomVisible(true)}
        >
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#829fe0"
          />
          <p className="sub-content">신랑측 계좌번호 확인</p>
        </div>
        <div
          className="contact-button"
          data-aos="fade-up"
          onClick={() => setBrideVisible(true)}
        >
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#fe7daf"
          />
          <p className="sub-content">신부측 계좌번호 확인</p>
        </div>
      </div>

      <Modal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={
          <p className="description">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </p>
        }
      >
        <div>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {GROOM_NAME}</b>
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
      </Modal>

      <Modal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={
          <p className="description">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </p>
        }
      >
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신부 {BRIDE_NAME}</b>
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
      </Modal>
    </div>
  );
};

export default CongratulatoryMoney;
