import React from "react";
import { useHistory } from "react-router-dom";
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
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const categories = [
	{
		name: "Sofa gỗ",
		desc: "Đẳng cấp cho mọi không gian",
		background: "#f6f6bd",
		img: Image1,
	},
	{
		name: "Kệ tivi",
		desc: "Kiểu dáng sang trọng",
		background: "#d0e6eb",
		img: Image2,
	},
	{
		name: "Tủ rượu trang trí",
		desc: "Thiết kế theo phong cách Pháp",
		background: "#e8e3e3",
		img: Image3,
	},
	{
		name: "Bàn trà",
		desc: "Kiểu dáng hiện đại",
		background: "#f6f6bd",
		img: Image4,
	},
	{
		name: "Tủ giày",
		desc: "Đẳng cấp cho mọi không gian",
		background: "#d0e6eb",
		img: Image5,
	},
	{
		name: "Tủ áo",
		desc: "Thông minh thiết kế độc đáo",
		background: "#e8e3e3",
		img: Image6,
	},
	{
		name: "Giường ngủ",
		desc: "Giúp bạn có những giấc ngủ ngon",
		background: "#f6f6bd",
		img: Image7,
	},
	{
		name: "Bàn phấn",
		desc: "Nhẹ nhàng với vẻ đẹp tự nhiên",
		background: "#d0e6eb",
		img: Image8,
	},
	{
		name: "Tủ bếp",
		desc: "Sự hài lòng cho rất nhiều gia đình",
		background: "#e8e3e3",
		img: Image9,
	},
	{
		name: "Bàn ăn",
		desc: "Món nội thất không thể thiếu trong phòng bếp",
		background: "#f6f6bd",
		img: Image10,
	},
];

export default function ProductsManagement() {
	const history = useHistory();

	const handleClick = () => {
		history.push("/");
	};

	const { url } = useRouteMatch();

	return (
		<section>
			<h2 className="text-[30px] ml-4 mb-5">Products Category</h2>
			<Link
				className={`mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded ml-4`}
				to={`${url}/add`}
			>
				Thêm sản phẩm
			</Link>
			<div className="flex flex-wrap mt-5">
				{categories.map((category, index) => (
					<div
						className={`flex bg-[${category.background}] cursor-pointer mb-5 rounded-2xl w-[48%] mx-auto p-8 justify-center gap-[160px]`}
						key={index}
						onClick={handleClick}
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
