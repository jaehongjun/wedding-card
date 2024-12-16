import { useEffect } from "react"
import CongratulatoryMoney from "./components/congratulatoryMoney/CongratulatoryMoney"
import Gallery from "./components/gallery/Gallery"
import Greeting from "./components/greeting/Greeting"
import Location from "./components/location/Location"
import Quote from "./components/quote/Quote"
import Share from "./components/share/Share"
import Title from "./components/title/Title"
import AOS from "aos";
import "aos/dist/aos.css";
import "react-image-gallery/styles/css/image-gallery.css";
import FloatingButton from "./components/FloatingButton"

export const App = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      useEffect(() => {
        AOS.init({
          duration: 1500,
        });
      });

    return <div className="">
        <Title />
        <Greeting />
        <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <FloatingButton />
    </div>
}