import React from "react";
import Search from "./Search";
import Image1 from "../../assets/images/AKA6175.jpg";
import Image2 from "../../assets/images/giuong-ngu-go-oc-cho-5.jpg";
import Image3 from "../../assets/images/gia-giuong-ngu-go-oc-cho-2.jpg";
import Image4 from "../../assets/images/z2547237723000_4ba4625e28e169ff52f709fd0d5cdbf2-1.jpg";
import Image5 from "../../assets/images/tu-ruou-go-oc-cho-4.jpg";
import { Link } from "react-router-dom";

const posts = [
	{
		text: "5 thông tin về gỗ tấm tự nhiên quan trọng",
		image: Image1,
	},
	{
		text: "Nguyên tắc sắp xếp nội thất phòng ngủ cực sang trọng",
		image: Image2,
	},
	{
		text: "4 đồ nội thất phòng ngủ cơ bản ai cũng cần",
		image: Image3,
	},
	{
		text: "5 đồ nội thất phòng bếp không thể thiếu",
		image: Image4,
	},
	{
		text: "Nội thất gỗ tự nhiên thể hiện đẳng cấp của gia chủ",
		image: Image5,
	},
];

export default function RightContent() {
	return (
		<div className="w-[25%] px-[30px] ">
			<Search />
			<h2 className="mt-[25px] mb-[15px] text-[#777] text-[20px]">
				BÀI VIẾT MỚI
			</h2>
			<div className="w-[30px] h-[3px] bg-[#ccc] mb-7"></div>
			<ul>
				{posts.map((post, index) => (
					<li className="flex mb-5" key={index}>
						<div className="w-[45px] h-[45px] flex-shrink-0">
							<img
								src={post.image}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<Link
							to=""
							className=" ml-[15px] font-light text-[18px] leading-none"
						>
							<p>{post.text}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
