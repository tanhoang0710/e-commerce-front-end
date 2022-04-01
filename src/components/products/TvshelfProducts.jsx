import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";
import Product from "./Product";

import Image1 from "../../assets/images/outdoor.jpg";
import Image2 from "../../assets/images/AKA7185-1.jpg";
import Image3 from "../../assets/images/AKA6230.jpg";
import Image4 from "../../assets/images/ke-go-oc-cho-nhap-khau-bac-my-.jpg";
import Image5 from "../../assets/images/AKA9107.jpg";
import Image6 from "../../assets/images/z2852996644688_d8cb966f59fd6b0d3dc259578f23200c.jpg";
import Image7 from "../../assets/images/5-805x453.jpg";
import Image8 from "../../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
import Image9 from "../../assets/images/AKA8875.jpg";
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
		label: "KỆ TIVI",
		name: "KỆ LIỀN TỦ GỖ ÓC CHÓ – 1060",
		oldPrice: "28.000.000 ₫",
		newPrice: "28.000.000 ₫",
		desc: "Kích thước: 2600 x 400 x 520mm",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ 1081",
		oldPrice: "25.000.000 ₫",
		newPrice: "25.000.000 ₫",
		desc: "Kích thước: 2600 x 400 x 520mm",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ 1082",
		oldPrice: "39.300.000 ₫",
		newPrice: "39.300.000 ₫",
		desc: "Kích thước: 2200 x 380 x 520mm",
	},
	{
		id: 5,
		sale: "0%",
		image: Image5,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ 1085",
		oldPrice: "55.000.000 ₫",
		newPrice: "55.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 6,
		sale: "0%",
		image: Image6,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ IBIZ 1080",
		oldPrice: "65.000.000 ₫",
		newPrice: "65.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 7,
		sale: "0%",
		image: Image7,
		label: "DỰ ÁN NỘI THẤT",
		name: "THI CÔNG NỘI THẤT GỖ ÓCC CHÓ – HẢI DƯƠNG",
		oldPrice: "88.000.000 ₫",
		newPrice: "88.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "160.000.000 ₫",
		newPrice: "160.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "KỆ TIVI",
		name: "VÁCH VENEER GỖ ÓC CHÓ – MÃ 320",
		oldPrice: "138.000.000 ₫",
		newPrice: "138.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
];

export default function TvshelfProducts() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">KỆ TIVI</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
