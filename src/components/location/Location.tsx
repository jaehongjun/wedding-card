import React, { useEffect } from "react";
import { Divider } from "antd";
import Flower from "../../assets/Sakura_Flower.png";
import "./Location.css";

const Location = () => {
  useEffect(() => {
    // 스크립트가 이미 로드되었는지 확인
    const existingScript = document.querySelector(
      'script[src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"]'
    );

    if (!existingScript) {
      // 스크립트 생성
      const script = document.createElement('script');
      script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
      script.charset = 'UTF-8';
      script.className = 'daum_roughmap_loader_script';
      document.body.appendChild(script);

      script.onload = () => {
        initializeMap();
      };
    } else {
      // 스크립트가 이미 로드된 경우 바로 초기화
      initializeMap();
    }

    function initializeMap() {
      if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
        new window.daum.roughmap.Lander({
          timestamp: '1734356241082',
          key: '2mii6',
          // mapWidth: '640',
          mapHeight: '360',
        }).render();
      } else {
        console.error('다음 맵 로더를 찾을 수 없습니다.');
      }
    }
  }, []);

  return (
    <div className="wrapper">
      <Divider plain style={{ marginTop: 0, marginBottom: 16 }}>
        <span className="title">오시는 길</span>
      </Divider>
      <img src={Flower} alt="flower" className="image" />
      <p className="content">
        서울 강남구 봉은사로16길 31
        <br />
        메리스에이프럴 
      </p>
      <div
      id="daumRoughmapContainer1734356241082"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: '100%', height: '360px' }}
    ></div>
      <p className="content" style={{paddingTop:'42px'}}>
        <span className="title">차량 이용시</span>
        <br />
        <br />
        차량을 가지고 오시면 메리스에이프럴 
        <br />
        검색해서 오시면 무료로 발렛서비스를 해 드립니다
        <br />
        <br />
        <span className="title">버스 이용시</span>
        <br />
        <br />
        신논현역 4번출구 앞 버스정류장에서 셔틀차량이 
        <br />
        예식 1시간전부터 예식 시작까지 무료로 운행됩니다.
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
