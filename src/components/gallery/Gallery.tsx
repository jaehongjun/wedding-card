import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import "./Gallery.css";
import "antd/dist/antd.css";

import GalleryPhoto1 from "../../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../../assets/Gallery_Photo_6.webp";

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
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <p className="gallery-title">우리의 아름다운 순간</p>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </div>
  );
};

export default Gallery;
