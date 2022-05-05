import React from "react";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";

import Image1 from "../assets/images/outdoor.jpg";
import Image2 from "../assets/images/cdvaccd-800x453.jpg";
import Image3 from "../assets/images/giuong-ngu-go-oc-cho-hien-dai.jpg";
import Image4 from "../assets/images/giuong-ngu-go-oc-cho-nhap-khau-bac-my.jpg";
import Image5 from "../assets/images/AKA7859-scaled-1-900x506.jpg";
import Image6 from "../assets/images/AKA7835-scaled-1-900x507.jpg";
import Image7 from "../assets/images/giuong-ngu-go-oc-cho.jpg";
import Image8 from "../assets/images/136767131_2810010825924903_1013709917160022480_n.jpg";
import Image9 from "../assets/images/phong-ngu-noi-that-go-oc-cho-2-1-800x453.jpg";
import Image10 from "../assets/images/noi-that-phong-khach-go-oc-cho-900x507.jpg";
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
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ ÓC CHÓ BẮC MỸ – MÃ 7001GS",
		oldPrice: "38.000.000 ₫",
		newPrice: "38.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 3,
		sale: "18%",
		image: Image3,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ ÓC CHÓ NHẬP KHẨU",
		oldPrice: "45.000.000 ₫",
		newPrice: "36.900.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 4,
		sale: "27%",
		image: Image4,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ ÓC CHÓ NHẬP KHẨU – MÃ 7004",
		oldPrice: "48.000.000 ₫",
		newPrice: "35.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 5,
		sale: "17%",
		image: Image5,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ SỒI NGA – MÃ 7010GS",
		oldPrice: "22.900.000 ₫",
		newPrice: "18.900.000 ₫",
		desc: "Kích thước theo khổ đệm : 1800×2000 mm",
	},
	{
		id: 6,
		sale: "17%",
		image: Image6,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG GỖ SỒI NGA – MÃ 7011GS",
		oldPrice: "22.900.000 ₫",
		newPrice: "18.900.000 ₫",
		desc: "Kích thước theo khổ đệm : 1800×2000 mm",
	},
	{
		id: 7,
		sale: "0%",
		image: Image7,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG NGỦ GỖ ÓC CHÓ– MÃ 7015OC",
		oldPrice: "25.000.000 ₫",
		newPrice: "25.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 8,
		sale: "0%",
		image: Image8,
		label: "GIƯỜNG NGỦ",
		name: "GIƯỜNG NGỦ GỖ ÓC CHÓ– MÃ 7015OC1",
		oldPrice: "30.000.000 ₫",
		newPrice: "30.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 9,
		sale: "0%",
		image: Image9,
		label: "GIƯỜNG NGỦ",
		name: "NỘI THẤT PHÒNG NGỦ GỖ ÓC CHÓ + DA BÒ Ý",
		oldPrice: "50.000.000 ₫",
		newPrice: "50.000.000 ₫",
		desc: "Kích thước: 1800 x 2000",
	},
	{
		id: 10,
		sale: "0%",
		image: Image10,
		label: "BIỆT THỰ GỖ ÓC CHÓ HẢI PHÒNG - VẺ ĐẸP THÁCH THỨC THỜI GIAN",
		name: "THIẾT KẾ NỘI THẤT BIỆT THỰ HẢI PHÒNG",
		oldPrice: "38.000.000 ₫",
		newPrice: "38.000.000 ₫",
		desc: "Bảo hành 3 năm",
	},
];

export default function BedProductsManagement({ setProduct }) {
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
			<p className="text-[24px] ml-[22px]">Giường ngủ</p>
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
