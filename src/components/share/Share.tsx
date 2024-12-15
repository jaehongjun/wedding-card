import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Divider, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../Constants";
import "./Share.css";

const Share = () => {
  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAOTALK_API_TOKEN);
      }

      kakao.Link.createDefaultButton({
        objectType: "feed",
        container: "#sendKakao",
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
        installTalk: true,
      });

      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("카카오톡으로 청첩장을 공유합니다!");
      }, 100);
    }
  };

  return (
    <div className="share-wrapper">
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <span className="share-title">청첩장 공유하기</span>
      </Divider>
      <Button
        className="kakao-share-button"
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={createKakaoButton}
      >
        카카오톡으로 공유하기
      </Button>
      <CopyToClipboard text={WEDDING_INVITATION_URL}>
        <Button
          className="link-share-button"
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
        >
          링크로 공유하기
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default Share;
