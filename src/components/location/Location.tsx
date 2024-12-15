import React, { useEffect } from "react";
import { Divider } from "antd";
import Flower from "../../assets/Sakura_Flower.png";
import "./Location.css";

const Location = () => {
  // 카카오 맵 불러오기
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
		"timestamp" : "1734281865977",
		"key" : "2mi7z",
		"mapWidth" : "360",
		"mapHeight" : "240"
	}).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <div className="wrapper">
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <span className="title">오시는 길</span>
      </Divider>
      <img src={Flower} alt="flower" className="image" />
      <div
        id="daumRoughmapContainer1652464367301"
        className="map"
      ></div>
      <p className="content">
        서울 강남구 봉은사로16길 31
        <span className="title">차량 이용시</span>
        <br />
        <br />
        차량을 가지고 오시면 메리스에이프럴 검색해서 오시면 무료로 발렛서비스를 해 드립니다
        <br />
        <br />
        <span className="title">버스 이용시</span>
        <br />
        <br />
        신논현역 4번출구 앞 버스정류장에서 셔틀차량이 예식 1시간전부터 예식 시작까지 무료로 운행됩니다.
        <br />
        <br />
        <span className="title">지하철 이용시</span>
        <br />
        <br />
        신분당신논현역 4번 출구에서 416m(도보 8분)
      </p>
    </div>
  );
};

export default Location;
