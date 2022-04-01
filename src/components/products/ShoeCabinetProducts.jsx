import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";

const images = [Slider1, Slider2, Slider3];

export default function ShoeCabinetProducts() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">HIỆN TẠI SẢN PHẨM ĐÃ HẾT HÀNG</h2>
		</>
	);
}
