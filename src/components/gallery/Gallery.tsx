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
import { Button } from "@headlessui/react";
import EnterButton from "../EnterButton";

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
    originalHeight:400
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
    originalHeight:400
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
    originalHeight:400
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
    originalHeight:400
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
    originalHeight:400
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
    originalHeight:400
  },
];

const Gallery = () => {
  const onMoveGallery = () => {
    window.open("/three.html", "_blank");
  }
  
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
      <div className="bg-pattern" style={{marginTop:'20px',
         width:'100%', justifyItems:'center'
      }}>
          <Button type="button" style={{paddingLeft:'20px',paddingRight:'20px', borderRadius:'35px',display:'flex', flexDirection:'row', justifyContent:'center',  paddingBottom:'15px', paddingTop:'15px', background:'ghostwhite'}} onClick={onMoveGallery}>
            <TDGalleryButton/>
            <div className="show3d">3D 사진관 보러가기 </div>
            <EnterButton/>
          </Button>
      </div>
    </div>
  );
};

export default Gallery;
