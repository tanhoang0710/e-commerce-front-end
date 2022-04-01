import React from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";
import Product from "./Product";
import Image1 from "../../assets/images/outdoor.jpg";
import Image2 from "../../assets/images/z2457492380085_fa9a78f7c3e6cca7c7111c747ee53596-805x453.jpg";
import Image3 from "../../assets/images/AKA4922-805x453.jpg";
import Image4 from "../../assets/images/AKA9146.jpg";
import Image5 from "../../assets/images/AKA6382-1.jpg";
import Image6 from "../../assets/images/AKA4838.jpg";
import Image7 from "../../assets/images/AKA6340-1.jpg";
import Image8 from "../../assets/images/AKA6179-Copy.jpg";
import Image9 from "../../assets/images/AKA9315-1.jpg";
import Image10 from "../../assets/images/2172021-oc-cho-1-805x453.jpg";
import Image11 from "../../assets/images/sofa-go-oc-cho-7.jpg";
import Image12 from "../../assets/images/AKA9453-1.jpg";
import { useRouteMatch } from "react-router-dom";

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
		label: "DỰ ÁN KIẾN TRÚC",
		name: "DỰ ÁN BIỆT THỰ- PHÚC YÊN",
		oldPrice: "3.038.000.000 ₫",
		newPrice: "3.038.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 3,
		sale: "20%",
		image: Image3,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA + KỆ TIVI GỖ SỒI NGA – MÃ 0613SH",
		oldPrice: "38.000.000 ₫",
		newPrice: "30.400.000 ₫",
		desc: "Miễn phí vận chuyển nội thành / Hỗ trợ 50% phí vận chuyển đi tỉnh Bảo hành 12 tháng",
	},
	{
		id: 4,
		sale: "19%",
		image: Image4,
		label: "SẢN PHẨM",
		name: "SOFA GỖ 3 VĂNG – MÃ 0613K",
		oldPrice: "49.000.000 ₫",
		newPrice: "39.900.000 ₫",
		desc: "Kích thước: 3 Văng 2300 x 850, Bàn trà 1350 x 1350",
	},
	{
		id: 5,
		sale: "27%",
		image: Image5,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ GÕ ĐỎ PACHY – MÃ 0617G",
		oldPrice: "75.000.000 ₫",
		newPrice: "55.000.000 ₫",
		desc: "Kích thước: 1 Văng dài 2600 X 850 + 1 văng ngắn 1600 X 850, Đôn 1200 x 600, Bàn Trà 1400 x 850",
	},
	{
		id: 6,
		sale: "28%",
		image: Image6,
		label: "KIẾN TRÚC",
		name: "SOFA GỖ GÕ ĐỎ PACHY – MÃ 0699",
		oldPrice: "90.000.000 ₫",
		newPrice: "65.000.000 ₫",
		desc: "Kích thước: 1 Văng dài 2800×900 + 1 văng ngắn 1900×900, Đôn 1200 x 600, Bàn Trà 1300 x 850",
	},
	{
		id: 7,
		sale: "20%",
		image: Image7,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ HƯƠNG XÁM – MÃ 0613H",
		oldPrice: "38.000.000 ₫",
		newPrice: "30.400.000 ₫",
		desc: "Kích thước: 1 Văng dài 2700 X 850 + 1 văng ngắn 1800 X 850, Đôn 1200 x 550, Bàn Trà 1400 x 850",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ ÓC CHÓ – MÃ 0699C",
		oldPrice: "160.000.000 ₫",
		newPrice: "160.000.000 ₫",
		desc: "Kích thước: 1 Văng dài 2700×850 + 1 văng ngắn 1900×850, 1 văng ngắn 1600×850, Bàn Trà 1500 x 850",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ ÓC CHÓ – MÃ 0613ON",
		oldPrice: "138.000.000 ₫",
		newPrice: "138.000.000 ₫",
		desc: "Kích thước:2 Văng dài 21500×850, 1 văng 2400×850, Bàn Trà 1500 x1500",
	},
	{
		id: 10,
		sale: "31%",
		image: Image10,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ ÓC CHÓ – MÃ 0683",
		oldPrice: "38.000.000 ₫",
		newPrice: "30.400.000 ₫",
		desc: "Kích thước: 1 Văng dài 3000 x 850 + 1 văng ngắn 1900 × 850, 2 Đôn 1300 x 550, Bàn trà 1300 x 1300",
	},
	{
		id: 11,
		sale: "0%",
		image: Image11,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ ÓC CHÓ – MÃ 0688OL",
		oldPrice: "100.000.000 ₫",
		newPrice: "100.000.000 ₫",
		desc: "Kích thước: 1 Văng 3000 x 900, 1 văng 2150 x 900, 1 văng 1700 x900",
	},
	{
		id: 12,
		sale: "0%",
		image: Image12,
		label: "NỘI THẤT PHÒNG KHÁCH",
		name: "SOFA GỖ ÓC CHÓ – MÃ 0680D",
		oldPrice: "170.000.000 ₫",
		newPrice: "170.000.000 ₫",
		desc: "Kích thước:2 Văng dài 2400×850, 1 Đôn 1250×550, Bàn Trà 1200 x1200",
	},
];

// can fetch API o day

export default function SofaProducts() {
	const match = useRouteMatch();
	console.log(match);
	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">SOFA GỖ</h2>
			<div className="flex flex-wrap">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</>
	);
}
