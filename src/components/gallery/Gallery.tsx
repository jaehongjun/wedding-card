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
import GalleryPhoto7 from "../../assets/boards/0-8.jpeg";
import GalleryPhoto8 from "../../assets/boards/0-10.jpeg";
import GalleryPhoto9 from "../../assets/gray-picture.jpeg";
import GalleryPhoto10 from "../../assets/suiss-pick.jpeg";
import GalleryPhoto11 from "../../assets/backhug.jpeg";
import TDGalleryButton from "../TDGalleryButton";
import { Button } from "@headlessui/react";
import EnterButton from "../EnterButton";

const images = [
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
    originalHeight:400
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
    originalHeight:400
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
    originalHeight:400
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
    originalHeight:400
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
    originalHeight:400
  },
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
