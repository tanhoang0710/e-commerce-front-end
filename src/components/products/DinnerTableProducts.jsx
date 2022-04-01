import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";

import Product from "./Product";
import Image1 from "../../assets/images/AKA8460.jpg";
import Image2 from "../../assets/images/ban-ghe-an-go-oc-cho-nhap-khau-bac-my-5.jpg";
import Image3 from "../../assets/images/ban-ghe-an-go-oc-cho-nhap-khau-bac-my-6.jpg";
import Image4 from "../../assets/images/ban-ghe-an-go-oc-cho-nhap-khau-bac-my-10.jpg";
import Image5 from "../../assets/images/AKA6126-1.jpg";
import Image6 from "../../assets/images/z2194753081872_bd8c6e8e68f84f0f07427e1b66a58e71.jpg";
import Image7 from "../../assets/images/go-soi-nga-3-805x453.jpg";
import Image8 from "../../assets/images/47c409729220677e3e31-805x453.jpg";
import Image9 from "../../assets/images/AKA4101.jpg";

const images = [Slider1, Slider2, Slider3];

const products = [
	{
		id: 1,
		sale: "0%",
		image: Image1,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ – MÃ 0256",
		oldPrice: "28.000.000 ₫",
		newPrice: "28.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 2,
		sale: "0%",
		image: Image2,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ – MÃ 0259",
		oldPrice: "38.000.000 ₫",
		newPrice: "38.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHÊ ĂN GỖ ÓC CHÓ – MÃ 0260",
		oldPrice: "36.900.000 ₫",
		newPrice: "36.900.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ 10 GHẾ – MÃ 0258",
		oldPrice: "35.000.000 ₫",
		newPrice: "35.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 10 ghế",
	},
	{
		id: 5,
		sale: "23%",
		image: Image5,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ BẮC MỸ – MÃ 0401",
		oldPrice: "75.000.000 ₫",
		newPrice: "58.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 6,
		sale: "0%",
		image: Image6,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ SỒI NGA – MÃ 0221",
		oldPrice: "22.900.000 ₫",
		newPrice: "22.900.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 7,
		sale: "24%",
		image: Image7,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN LEAF WING GỖ SỒI NGA – MÃ 0402",
		oldPrice: "19.000.000 ₫",
		newPrice: "14.500.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN ÓC CHÓ = MÃ 0257",
		oldPrice: "30.000.000 ₫",
		newPrice: "30.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "BÀN GHẾ ĂN",
		name: "GHẾ ĂN GỖ SỒI NGA – MÃ 0255",
		oldPrice: "15.000.000 ₫",
		newPrice: "15.000.000 ₫",
		desc: "",
	},
];

export default function DinnerTableProducts() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">BÀN GHẾ ĂN</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
