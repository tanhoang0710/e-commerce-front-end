import React from "react";
import Image1 from "../assets/images/noi-that-phong-khach-go-oc-cho-3.jpg";
import Image2 from "../assets/images/giuong-ngu-go-oc-cho-nhap-khau-bac-my.jpg";
import Image3 from "../assets/images/phong-an.jpg";
import Image4 from "../assets/images/noi-that-go-oc-cho-phong-tho.jpg";
import { Link } from "react-router-dom";

const products = [
	{
		id: 1,
		image: Image1,
		desc: "Nội thất phòng khách",
	},
	{
		id: 2,
		image: Image2,
		desc: "Nội thất phòng ngủ",
	},
	{
		id: 3,
		image: Image3,
		desc: "Không gian phòng bếp",
	},
	{
		id: 4,
		image: Image4,
		desc: "Nội thất phòng thờ",
	},
];

export default function ProductCategory() {
	return (
		<section className="px-[10px]">
			<h2 className="section-title">DANH MỤC SẢN PHẨM</h2>
			<div className="columns-4">
				{products.map((product, index) => (
					<div
						className="relative product-container h-[265px] cursor-pointer overflow-hidden"
						key={index}
					>
						<Link to="/products/:productId">
							<img
								src={product.image}
								alt="images"
								className="w-full h-full object-cover"
							/>
						</Link>
						<div className="absolute bottom-0 text-white text-center bg-[#00000078] w-full pt-[8px] pb-[15px]">
							{product.desc}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
