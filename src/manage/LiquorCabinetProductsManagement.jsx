import React from "react";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";

import Image1 from "../assets/images/outdoor.jpg";
import Image2 from "../assets/images/AKA48731-805x453.jpg";
import Image3 from "../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
import Image4 from "../assets/images/tu-ruou-go-oc-cho-3-805x453.jpg";
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
		label: "NỘI THẤT PHÒNG NGỦ",
		name: "GIƯỜNG NGỦ CHO BÉ 2 TẦNG – MÃ 551",
		oldPrice: "8.000.000 ₫",
		newPrice: "8.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "125.000.000 ₫",
		newPrice: "125.000.000 ₫",
		desc: "Bảo hành 2 năm",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "KHÔNG GIAN PHÒNG BẾP",
		name: "TỦ RƯỢU GỖ ÓC CHÓ – MÃ 550",
		oldPrice: "69.600.000 ₫",
		newPrice: "69.600.000 ₫",
		desc: "Bảo hành 2 năm",
	},
];

export default function LiquorCabinetProductsManagement({ setProduct }) {
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
			<p className="text-[24px] ml-[22px]">Tủ rượu</p>
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
