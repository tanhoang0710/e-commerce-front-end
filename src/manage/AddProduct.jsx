import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function AddProduct() {
	const handleAddDiscountCode = () => {
		toast.success("Thêm mã giảm giá thành công");
	};

	// {
	// 	id: 12,
	// 	sale: "0%",
	// 	image: Image12,
	// 	label: "NỘI THẤT PHÒNG KHÁCH",
	// 	name: "SOFA GỖ ÓC CHÓ – MÃ 0680D",
	// 	oldPrice: "170.000.000 ₫",
	// 	newPrice: "170.000.000 ₫",
	// 	desc: "Kích thước:2 Văng dài 2400×850, 1 Đôn 1250×550, Bàn Trà 1200 x1200",
	// }

	return (
		<div className="w-[40%] mx-auto border-[1px] border-[#ccc] py-[25px] px-[80px] mb-5">
			<h2 className="text-[28px] text-[#8e8d8d] font-normal mb-[10px]">
				Thêm sản phẩm mới
			</h2>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="text" className="mr-[15px] w-[120px]">
					Mã
				</label>
				<input
					type="text"
					id="text"
					class="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="sale" className="mr-[15px] w-[120px]">
					Giảm giá
				</label>
				<input
					id="sale"
					type="number"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="image" className="mr-[15px] w-[120px]">
					Ảnh
				</label>
				<input type="file" id={"image"} />
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="label" className="mr-[15px] w-[120px]">
					Nhãn
				</label>
				<input
					type="text"
					id="label"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="name" className="mr-[10px] w-[120px]">
					Tên
				</label>
				<input
					type="text"
					id="name"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="old-price" className="mr-[10px] w-[120px]">
					Giá cũ
				</label>
				<input
					type="text"
					id="old-price"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="new-price" className="mr-[10px] w-[120px]">
					Giá mới
				</label>
				<input
					type="text"
					id="new-price"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="desc" className="mr-[10px] w-[120px]">
					Mô tả
				</label>
				<input
					type="text"
					id="desc"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
				/>
			</div>
			<button
				className={`mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded`}
				onClick={handleAddDiscountCode}
			>
				Thêm
			</button>
			<ToastContainer />
		</div>
	);
}
