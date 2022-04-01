import React from "react";
import ContactCategory from "../components/ContactCategory";
import Content from "../components/Content";

import NewCategory from "../components/NewCategory";
import ProductCategory from "../components/ProductCategory";
import ProjectCategory from "../components/ProjectCategory";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";

const images = [Slide1, Slide2, Slide3];

export default function Home() {
	return (
		<div className="mt-[83px]">
			<Slider images={images} />
			<ProjectCategory />
			<ProductCategory />
			<Content type="1" />
			<Content type="2" />
			<NewCategory />
			<Slider2 />
			<ContactCategory />
		</div>
	);
}
