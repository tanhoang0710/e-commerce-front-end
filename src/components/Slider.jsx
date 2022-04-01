import React from "react";
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

export default function Slider({ images }) {
	return (
		<section className="overflow-hidden">
			<Flickity
				className={"carousel slider"}
				elementType={"div"}
				options={flickityOptions}
			>
				<img src={images[0]} alt="slide" />
				<img src={images[1]} alt="slide" />
				<img src={images[2]} alt="slide" />
			</Flickity>
		</section>
	);
}
