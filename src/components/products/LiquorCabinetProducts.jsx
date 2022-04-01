import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";
import Product from "./Product";

import Image1 from "../../assets/images/outdoor.jpg";
import Image2 from "../../assets/images/AKA48731-805x453.jpg";
import Image3 from "../../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
import Image4 from "../../assets/images/tu-ruou-go-oc-cho-3-805x453.jpg";
const images = [Slider1, Slider2, Slider3];

const products = [
	{
		id: 1,
		sale: "0%",
		image: Image1,
		label: "DỰ ÁN",
		name: "DỰ ÁN BIỆT THỰ VƯỜN – HẢI PHÒNG",
		oldPrice: "2.038.000.000 ₫",
		newPrice: "2.038.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 2,
		sale: "0%",
		image: Image2,
		label: "NỘI THẤT PHÒNG NGỦ",
		name: "GIƯỜNG NGỦ CHO BÉ 2 TẦNG – MÃ 551",
		oldPrice: "8.000.000 ₫",
		newPrice: "8.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "125.000.000 ₫",
		newPrice: "125.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "KHÔNG GIAN PHÒNG BẾP",
		name: "TỦ RƯỢU GỖ ÓC CHÓ – MÃ 550",
		oldPrice: "69.600.000 ₫",
		newPrice: "69.600.000 ₫",
		desc: "Bảo hành 2 năm",
	},
];

export default function LiquorCabinetProducts() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">TỦ RƯỢU TRANG TRÍ</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
