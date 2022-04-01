import React from "react";
import Slide1 from "../assets/images/AKA5415.jpg";
import Slide2 from "../assets/images/noi-that-go-oc-cho-2.jpg";
import Flickity from "react-flickity-component";

const flickityOptions = {
	initialIndex: 1,
	cellAlign: "center",
	imagesLoaded: true,
	lazyLoad: 1,
	freeScroll: false,
	wrapAround: true,
	autoPlay: 2000,
	pauseAutoPlayOnHover: true,
	prevNextButtons: true,
	contain: true,
	adaptiveHeight: true,
	dragThreshold: 10,
	percentPosition: true,
	pageDots: true,
	rightToLeft: false,
	draggable: true,
	selectedAttraction: 0.1,
	parallax: 0,
	friction: 0.6,
};

export default function Slider2() {
	return (
		<section className="overflow-hidden">
			<Flickity
				className={"carousel relative slider2"}
				elementType={"div"}
				options={flickityOptions}
			>
				<img src={Slide1} alt="slide" />
				<img src={Slide2} alt="slide" />
			</Flickity>
		</section>
	);
}
