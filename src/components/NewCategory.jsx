import React from "react";
import Image1 from "../assets/images/AKA6175.jpg";
import Image2 from "../assets/images/giuong-ngu-go-oc-cho-5.jpg";
import Image3 from "../assets/images/gia-giuong-ngu-go-oc-cho-2.jpg";
import { Link } from "react-router-dom";

const news = [
	{
		id: 1,
		image: Image1,
		title: "5 thông tin về gỗ tấm tự nhiên quan trọng",
		content:
			"Gỗ tấm tự nhiên là 1 trong những chất liệu được sử dụng rất nhiều...",
	},
	{
		id: 2,
		image: Image2,
		title: "Nguyên tắc sắp xếp nội thất phòng ngủ cực sang trọng",
		content:
			"Sau những giờ làm việc, học tập căng thẳng thì không gian phòng ngủ chính...",
	},
	{
		id: 3,
		image: Image3,
		title: "4 đồ nội thất phòng ngủ cơ bản ai cũng cần",
		content:
			"Phòng ngủ được coi là không gian riêng tư nhất cho mỗi con người, đây...",
	},
];

export default function NewCategory() {
	return (
		<section className="mb-[75px]">
			<h2 className="section-title">TIN TỨC</h2>
			<div className="px-[10px] columns-3">
				{news.map((item, index) => (
					<Link
						to="/news/:newId"
						className="new-container"
						key={index}
					>
						<div className="">
							<div>
								<img src={item.image} alt="" />
							</div>
							<div className="mt-[12px]">
								<div className="text-[#555555] text-[18px] font-bold">
									{item.title}
								</div>
								<div className="new-content">
									{item.content}
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
