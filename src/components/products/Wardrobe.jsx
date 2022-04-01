import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";

import Product from "./Product";

import Image1 from "../../assets/images/outdoor.jpg";
import Image2 from "../../assets/images/AKA7185-1.jpg";
import Image3 from "../../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
import Image4 from "../../assets/images/AKA8853-600x453.jpg";
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
		name: "KỆ LIỀN TỦ GỖ ÓC CHÓ – 1060",
		oldPrice: "28.000.000 ₫",
		newPrice: "28.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
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
		label: "SẢN PHẨM",
		name: "TỦ ÁO GỖ ÓC CHÓ",
		oldPrice: "19.600.000 ₫",
		newPrice: "19.600.000 ₫",
		desc: "Hệ tủ áo gỗ óc chó nhập khẩu mang lại vẻ đẹp hiện đại, tiện nghi, sang trọng.",
	},
];

export default function Wardrobe() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">TỦ ÁO</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
