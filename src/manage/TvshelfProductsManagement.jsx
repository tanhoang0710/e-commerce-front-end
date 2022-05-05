import React from "react";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";

import Image1 from "../assets/images/outdoor.jpg";
import Image2 from "../assets/images/AKA7185-1.jpg";
import Image3 from "../assets/images/AKA6230.jpg";
import Image4 from "../assets/images/ke-go-oc-cho-nhap-khau-bac-my-.jpg";
import Image5 from "../assets/images/AKA9107.jpg";
import Image6 from "../assets/images/z2852996644688_d8cb966f59fd6b0d3dc259578f23200c.jpg";
import Image7 from "../assets/images/5-805x453.jpg";
import Image8 from "../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
import Image9 from "../assets/images/AKA8875.jpg";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

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
		label: "KỆ TIVI",
		name: "KỆ LIỀN TỦ GỖ ÓC CHÓ – 1060",
		oldPrice: "28.000.000 ₫",
		newPrice: "28.000.000 ₫",
		desc: "Kích thước: 2600 x 400 x 520mm",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ 1081",
		oldPrice: "25.000.000 ₫",
		newPrice: "25.000.000 ₫",
		desc: "Kích thước: 2600 x 400 x 520mm",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ 1082",
		oldPrice: "39.300.000 ₫",
		newPrice: "39.300.000 ₫",
		desc: "Kích thước: 2200 x 380 x 520mm",
	},
	{
		id: 5,
		sale: "0%",
		image: Image5,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ 1085",
		oldPrice: "55.000.000 ₫",
		newPrice: "55.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 6,
		sale: "0%",
		image: Image6,
		label: "KỆ TIVI",
		name: "KỆ TIVI GỖ ÓC CHÓ – MÃ IBIZ 1080",
		oldPrice: "65.000.000 ₫",
		newPrice: "65.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 7,
		sale: "0%",
		image: Image7,
		label: "DỰ ÁN NỘI THẤT",
		name: "THI CÔNG NỘI THẤT GỖ ÓCC CHÓ – HẢI DƯƠNG",
		oldPrice: "88.000.000 ₫",
		newPrice: "88.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "160.000.000 ₫",
		newPrice: "160.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "KỆ TIVI",
		name: "VÁCH VENEER GỖ ÓC CHÓ – MÃ 320",
		oldPrice: "138.000.000 ₫",
		newPrice: "138.000.000 ₫",
		desc: "Kích thước: 2200 x 400 x 550mm",
	},
];

export default function TvshelfProductsManagement({ setProduct }) {
	const history = useHistory();
	const { url } = useRouteMatch();

	const handleDeleteProduct = (index) => {
		toast.success("Xoá sản phẩm thành công");
	};
	const handleEditProduct = (product) => {
		setProduct(product);
		history.push(`${url}/${product.id}/edit`);
	};

	return (
		<div>
			<p className="text-[24px] ml-[22px]">Kệ tivi</p>
			<div className="overflow-y-scroll max-h-[500px]">
				{products.map((product) => (
					<div className="flex items-center bg-[#f5f7f9] w-[55%] mx-auto rounded-2xl shadow-2xl shadow-slate-500 p-[10px] gap-3 mb-5">
						<div className="h-[60px] rounded-2xl overflow-hidden w-[60px] ml-[15px]">
							<img
								src={product.image}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-[70%]">
							<h3 className="text-[20px]">{product.name}</h3>
							<h3 className="">{product.desc}</h3>
							<span className="text-[14px] mr-2 text-[#767575]">
								Giá cũ: {product.oldPrice}{" "}
							</span>
							<span className="text-[14px] mr-2 text-[#767575]">
								Giá mới: {product.newPrice}{" "}
							</span>
							<span className="text-[14px] mr-2 text-[#767575]">
								Giảm giá: {product.sale}{" "}
							</span>
						</div>
						<div className="flex-1 flex items-center justify-center gap-3">
							<div
								className="w-7 h-7 bg-[#1a99fb] flex items-center justify-center rounded-md text-white"
								onClick={() => handleEditProduct(product)}
							>
								<MdEdit className="cursor-pointer text-[20px]" />
							</div>
							<div
								className="text-red-500 text-[30px] flex justify-center"
								onClick={() => handleDeleteProduct(product.id)}
							>
								<TiDelete className="cursor-pointer" />
							</div>
						</div>
					</div>
				))}
				<ToastContainer className="text-[16px]" />
			</div>
		</div>
	);
}
