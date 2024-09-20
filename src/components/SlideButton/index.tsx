import { ReactSVG } from "react-svg";
import NextSlideSVG from "@assets/nextSlide.svg";
import PreviousSVG from "@assets/previousSlide.svg";

export function SlideButton() {
  return (
    <>
      <button className="previousSlideButton">
        <ReactSVG src={PreviousSVG} />
      </button>
      <button className="nextSlideButton">
        <ReactSVG src={NextSlideSVG} />
      </button>
    </>
  );
}
