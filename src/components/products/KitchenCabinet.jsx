import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";
import Product from "./Product";
import Image1 from "../../assets/images/outdoor.jpg";
import Image2 from "../../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
import Image3 from "../../assets/images/AKA4875-805x453.jpg";
import Image4 from "../../assets/images/z2547237723000_4ba4625e28e169ff52f709fd0d5cdbf2-1-805x453.jpg";
import Image5 from "../../assets/images/tu-bep-goc-oc-cho-hien-dai-800x453.jpg";
import Image6 from "../../assets/images/bep-an-go-oc-cho-1-800x453.jpg";

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
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "338.000.000 ₫",
		newPrice: "338.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "KHÔNG GIAN PHÒNG BẾP",
		name: "TỦ BẾP GỖ CN AN CƯỜNG + ACRYLIC – MÃ 300",
		oldPrice: "45.000.000 ₫",
		newPrice: "45.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "KHÔNG GIAN PHÒNG BẾP",
		name: "TỦ BẾP GỖ ÓC CHÓ – MÃ 310",
		oldPrice: "35.000.000 ₫",
		newPrice: "35.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 5,
		sale: "0%",
		image: Image5,
		label: "DỰ ÁN KIẾN TRÚC",
		name: "TỦ BẾP GỖ ÓC CHÓ NHẬP KHẨU – MÃ 321",
		oldPrice: "29.000.000 ₫",
		newPrice: "29.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 6,
		sale: "0%",
		image: Image6,
		label: "KHÔNG GIAN PHÒNG BẾP",
		name: "TỦ BẾP GỖ ÓC CHÓ VỚI ĐÁ ỐP CAO CẤP",
		oldPrice: "33.900.000 ₫",
		newPrice: "33.900.000 ₫",
		desc: "Bảo hành 2 năm",
	},
];

export default function KitchenCabinet() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">TỦ BẾP</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
