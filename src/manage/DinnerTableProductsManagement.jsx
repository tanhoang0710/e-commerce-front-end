import React from "react";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";

import Image1 from "../assets/images/AKA8460.jpg";
import Image2 from "../assets/images/ban-ghe-an-go-oc-cho-nhap-khau-bac-my-5.jpg";
import Image3 from "../assets/images/ban-ghe-an-go-oc-cho-nhap-khau-bac-my-6.jpg";
import Image4 from "../assets/images/ban-ghe-an-go-oc-cho-nhap-khau-bac-my-10.jpg";
import Image5 from "../assets/images/AKA6126-1.jpg";
import Image6 from "../assets/images/z2194753081872_bd8c6e8e68f84f0f07427e1b66a58e71.jpg";
import Image7 from "../assets/images/go-soi-nga-3-805x453.jpg";
import Image8 from "../assets/images/47c409729220677e3e31-805x453.jpg";
import Image9 from "../assets/images/AKA4101.jpg";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const products = [
	{
		id: 1,
		sale: "0%",
		image: Image1,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ – MÃ 0256",
		oldPrice: "28.000.000 ₫",
		newPrice: "28.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 2,
		sale: "0%",
		image: Image2,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ – MÃ 0259",
		oldPrice: "38.000.000 ₫",
		newPrice: "38.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 3,
		sale: "0%",
		image: Image3,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHÊ ĂN GỖ ÓC CHÓ – MÃ 0260",
		oldPrice: "36.900.000 ₫",
		newPrice: "36.900.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 4,
		sale: "0%",
		image: Image4,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ 10 GHẾ – MÃ 0258",
		oldPrice: "35.000.000 ₫",
		newPrice: "35.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 10 ghế",
	},
	{
		id: 5,
		sale: "23%",
		image: Image5,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ ÓC CHÓ BẮC MỸ – MÃ 0401",
		oldPrice: "75.000.000 ₫",
		newPrice: "58.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 6,
		sale: "0%",
		image: Image6,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN GỖ SỒI NGA – MÃ 0221",
		oldPrice: "22.900.000 ₫",
		newPrice: "22.900.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 7,
		sale: "24%",
		image: Image7,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN LEAF WING GỖ SỒI NGA – MÃ 0402",
		oldPrice: "19.000.000 ₫",
		newPrice: "14.500.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "BÀN GHẾ ĂN",
		name: "BÀN GHẾ ĂN ÓC CHÓ = MÃ 0257",
		oldPrice: "30.000.000 ₫",
		newPrice: "30.000.000 ₫",
		desc: "Chọn bộ 1 bàn + 8 ghế",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "BÀN GHẾ ĂN",
		name: "GHẾ ĂN GỖ SỒI NGA – MÃ 0255",
		oldPrice: "15.000.000 ₫",
		newPrice: "15.000.000 ₫",
		desc: "",
	},
];

export default function DinnerTableProductsManagement({ setProduct }) {
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
			<p className="text-[24px] ml-[22px]">Bàn ghế ăn</p>
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
