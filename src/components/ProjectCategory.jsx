import React from "react";
import Flickity from "react-flickity-component";
import Slide4 from "../assets/images/slide4.jpg";
import Slide5 from "../assets/images/slide5.jpg";
import Slide6 from "../assets/images/slide6.jpg";
import Slide7 from "../assets/images/slide7.jpg";
import Slide8 from "../assets/images/slide8.jpg";
import Slide9 from "../assets/images/slide9.jpg";
import Slide10 from "../assets/images/slide10.jpg";
import Slide11 from "../assets/images/slide11.jpg";
import Label from "./UI/Label";
import { Link } from "react-router-dom";

const flickityOptions = {
	initialIndex: 1,
	lazyLoad: false,
	groupCells: true,
	dragThreshold: 5,
	cellAlign: "left",
	wrapAround: true,
	prevNextButtons: true,
	percentPosition: true,
	pageDots: false,
	rightToLeft: false,
	autoPlay: false,
	selectedAttraction: 0.1,
	parallax: 0,
	friction: 0.6,
};

const data = [
	{
		slide: Slide4,
		type: "Dự án",
		desc: "Dự án biệt thự - hà đông",
	},
	{
		slide: Slide5,
		type: "Dự án",
		desc: "Dự án chung cư - hà nội",
	},
	{
		slide: Slide6,
		type: "Dự án",
		desc: "Dự án biệt thự - vĩnh phúc",
	},
	{
		slide: Slide7,
		type: "Dự án",
		desc: "Dự án biệt thự vườn - Hải phòng",
	},
	{
		slide: Slide8,
		type: "Dự án kiến trúc",
		desc: "Tủ bếp gỗ óc chó nhập khẩu – mã 321",
	},
	{
		slide: Slide9,
		type: "Dự án kiến trúc",
		desc: "Dự án biệt thự - phúc yên",
	},
	{
		slide: Slide10,
		type: "Dự án nội thất",
		desc: "Thi công nội thất gỗ ócc chó – Hải Dương",
	},
	{
		slide: Slide11,
		type: "Dự án",
		desc: "Dự án biệt thự - hà nội",
	},
];

export default function ProjectCategory() {
	return (
		<section className="overflow-hidden">
			<h2 className="section-title">DỰ ÁN</h2>
			<Flickity
				options={flickityOptions}
				className="carousel relative project"
			>
				{data.map((item, index) => (
					<div
						before=""
						className="w-[33.3333333%] h-[270px] px-[10px] relative before:content-[attr(before)] before:absolute before:left-[10px] before:w-[486.388px] before:h-full before:bg-[#3a2008a1] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-800"
						key={index}
					>
						<Link to={"/projects/:projectId"}>
							<img
								src={item.slide}
								className="w-full h-full object-cover"
								alt="slide"
							/>
							<div className="absolute bottom-0 pt-[10px] pb-[20px] w-[486.388px] flex flex-col items-center">
								<Label>{item.type}</Label>
								<div className="text-[#f1f1f1] text-[15px] uppercase mt-[15px]">
									{item.desc}
								</div>
							</div>
						</Link>
					</div>
				))}
			</Flickity>
			<div className="flex justify-center mt-5">
				<Link
					to="/projects"
					className="inline-block text-[15px] text-[#1f0f07] text-center font-normal leading-6 px-[18px] py-1 border-solid border-[2px] border-[#1f0f07] rounded-[99px] hover:text-white hover:bg-[#1f0f07] transition duration-300"
				>
					XEM TẤT CẢ DỰ ÁN
				</Link>
			</div>
		</section>
	);
}
