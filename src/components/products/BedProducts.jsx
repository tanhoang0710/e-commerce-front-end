import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";

import Product from "./Product";
import Image1 from "../../assets/images/outdoor.jpg";
import Image2 from "../../assets/images/cdvaccd-800x453.jpg";
import Image3 from "../../assets/images/giuong-ngu-go-oc-cho-hien-dai.jpg";
import Image4 from "../../assets/images/giuong-ngu-go-oc-cho-nhap-khau-bac-my.jpg";
import Image5 from "../../assets/images/AKA7859-scaled-1-900x506.jpg";
import Image6 from "../../assets/images/AKA7835-scaled-1-900x507.jpg";
import Image7 from "../../assets/images/giuong-ngu-go-oc-cho.jpg";
import Image8 from "../../assets/images/136767131_2810010825924903_1013709917160022480_n.jpg";
import Image9 from "../../assets/images/phong-ngu-noi-that-go-oc-cho-2-1-800x453.jpg";
import Image10 from "../../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";

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
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ ÓC CHÓ BẮC MỸ – MÃ 7001GS",
		oldPrice: "38.000.000 ₫",
		newPrice: "38.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 3,
		sale: "18%",
		image: Image3,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ ÓC CHÓ NHẬP KHẨU",
		oldPrice: "45.000.000 ₫",
		newPrice: "36.900.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 4,
		sale: "27%",
		image: Image4,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ ÓC CHÓ NHẬP KHẨU – MÃ 7004",
		oldPrice: "48.000.000 ₫",
		newPrice: "35.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 5,
		sale: "17%",
		image: Image5,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ SỒI NGA – MÃ 7010GS",
		oldPrice: "22.900.000 ₫",
		newPrice: "18.900.000 ₫",
		desc: "Kích thước theo khổ đệm : 1800×2000 mm",
	},
	{
		id: 6,
		sale: "17%",
		image: Image6,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ SỒI NGA – MÃ 7011GS",
		oldPrice: "22.900.000 ₫",
		newPrice: "18.900.000 ₫",
		desc: "Kích thước theo khổ đệm : 1800×2000 mm",
	},
	{
		id: 7,
		sale: "0%",
		image: Image7,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG NGỦ GỖ ÓC CHÓ– MÃ 7015OC",
		oldPrice: "25.000.000 ₫",
		newPrice: "25.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG NGỦ GỖ ÓC CHÓ– MÃ 7015OC1",
		oldPrice: "30.000.000 ₫",
		newPrice: "30.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "GIƯỜNG NGỦ",
		name: "NỘI THẤT PHÒNG NGỦ GỖ ÓC CHÓ + DA BÒ Ý",
		oldPrice: "50.000.000 ₫",
		newPrice: "50.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 10,
		sale: "0%",
		image: Image10,
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "38.000.000 ₫",
		newPrice: "38.000.000 ₫",
		desc: "Bảo hành 3 năm",
	},
];

export default function BedProducts() {
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">GIƯỜNG NGỦ</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
