import React from "react";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

import Image1 from "../assets/images/AKA4838.jpg";
import Image2 from "../assets/images/z2852996644688_d8cb966f59fd6b0d3dc259578f23200c.jpg";
import Image3 from "../assets/images/tu-ruou-go-oc-cho-4.jpg";
import Image4 from "../assets/images/ban-sofa-mat-da-hien-dai-510x510.jpg";
import Image5 from "../assets/images/Kich-thuoc-tu-giay-hien-dai-TG6802.jpg";
import Image6 from "../assets/images/AKA8853-600x453.jpg";
import Image7 from "../assets/images/giuong-ngu-go-oc-cho-nhap-khau-bac-my.jpg";
import Image8 from "../assets/images/ban-phan-thong-minh-11-e1613789624195.jpg";
import Image9 from "../assets/images/z2547237723000_4ba4625e28e169ff52f709fd0d5cdbf2-1-805x453.jpg";
import Image10 from "../assets/images/phong-an.jpg";

const categories = [
	{
		name: "Sofa gỗ",
		desc: "Đẳng cấp cho mọi không gian",
		img: Image1,
		category: "sofa",
	},
	{
		name: "Kệ tivi",
		desc: "Kiểu dáng sang trọng",
		img: Image2,
		category: "tv-shelf",
	},
	{
		name: "Tủ rượu trang trí",
		desc: "Thiết kế theo phong cách Pháp",
		img: Image3,
		category: "liquor-cabinet",
	},
	{
		name: "Bàn trà",
		desc: "Kiểu dáng hiện đại",
		img: Image4,
		category: "tea-table",
	},
	{
		name: "Tủ giày",
		desc: "Đẳng cấp cho mọi không gian",
		img: Image5,
		category: "shoe-cabinet",
	},
	{
		name: "Tủ áo",
		desc: "Thông minh thiết kế độc đáo",
		img: Image6,
		category: "wardrobe",
	},
	{
		name: "Giường ngủ",
		desc: "Giúp bạn có những giấc ngủ ngon",
		img: Image7,
		category: "bed",
	},
	{
		name: "Bàn phấn",
		desc: "Nhẹ nhàng với vẻ đẹp tự nhiên",
		img: Image8,
		category: "makeup-table",
	},
	{
		name: "Tủ bếp",
		desc: "Sự hài lòng cho rất nhiều gia đình",
		img: Image9,
		category: "kitchen-cabinet",
	},
	{
		name: "Bàn ăn",
		desc: "Món nội thất không thể thiếu trong phòng bếp",
		img: Image10,
		category: "dinner-table",
	},
];

export default function ProductsManagement() {
	const history = useHistory();

	const handleClick = (category) => {
		history.push(`${url}/${category}`);
	};

	const { url } = useRouteMatch();

	return (
		<section>
			<h2 className="text-[30px] ml-4 mb-5">Products Category</h2>
			<div className="flex flex-wrap mt-5">
				{categories.map((category, index) => (
					<div
						className={`flex bg-[#bb9f9f] cursor-pointer mb-5 rounded-2xl w-[48%] mx-auto p-8 justify-center gap-[160px]`}
						key={index}
						onClick={() => handleClick(category.category)}
					>
						<div className="w-[50%]">
							<h2 className="text-[32px]">{category.name}</h2>
							<p className="text-[18px] text-[#5d5c5c]">
								{category.desc}
							</p>
						</div>
						<div className="w-[120px] h-[80px] rounded-2xl overflow-hidden">
							<img
								src={category.img}
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
