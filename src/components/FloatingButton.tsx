import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import "./FloatingButton.css"; // CSS 파일 가져오기

const FloatingButton = () => {
    const onMobilePhotoClick = () => {
        window.open("/three.html", "_blank");
    }

  return (
      <div className="floating-container">
        <Transition
          as={Fragment}
          show={true}
          enter="fade-in"
          enterFrom="hidden"
          enterTo="visible"
          leave="fade-out"
          leaveFrom="visible"
          leaveTo="hidden"
        >
          <button
            onClick={onMobilePhotoClick}
            className="floating-button"
          >
            3D 모바일 사진관
          </button>
        </Transition>
      </div>
  );
};

export default FloatingButton;
