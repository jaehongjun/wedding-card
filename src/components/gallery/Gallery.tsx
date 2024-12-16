import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import "./Gallery.css";
import "antd/dist/antd.css";

import GalleryPhoto1 from "../../assets/suiss-lake.jpeg";
import GalleryPhoto2 from "../../assets/denim.png";
import GalleryPhoto3 from "../../assets/busan-code.jpeg";
import GalleryPhoto4 from "../../assets/finger-combi.jpeg";
import GalleryPhoto5 from "../../assets/sunset.jpeg";
import GalleryPhoto6 from "../../assets/tree.jpeg";
import TDGalleryButton from "../TDGalleryButton";

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <Divider style={{ marginTop: 0, marginBottom: 16 }} plain>
        <p className="gallery-title">우리의 아름다운 순간</p>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
      <div style={{marginTop:'20px',
         width:'100%', alignItems:'center'
      }}>
        <div style={{border:'1px solid #f0f0f0', borderRadius:'5px',display:'flex', flexDirection:'row', justifyContent:'center',  paddingBottom:'20px', paddingTop:'20px',}}>
          <TDGalleryButton/>
          <div style={{marginLeft:'5px'}}>3D 사진관 보러가기</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
