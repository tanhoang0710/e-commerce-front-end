import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { updateProduct } from "../store/product-slice";

export default function EditProduct({ product }) {
	const [sale, setSale] = useState(product.sale);
	const [name, setName] = useState(product.name);
	const [oldPrice, setOldPrice] = useState(product.oldPrice);
	const [newPrice, setNewPrice] = useState(product.newPrice);
	const [desc, setDesc] = useState(product.desc);

	const dispatch = useDispatch();

	const handleEditProduct = () => {
		dispatch(
			updateProduct({
				id: product.id,
				sale,
				label: product.label,
				name,
				oldPrice,
				newPrice,
				desc,
			})
		);
		toast.success("Sửa sản phẩm thành công");
	};

	return (
		<div className="w-[40%] mx-auto border-[1px] border-[#ccc] py-[25px] px-[80px] mb-5">
			<h2 className="text-[28px] text-[#8e8d8d] font-normal mb-[10px]">
				Sửa sản phẩm
			</h2>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="text" className="mr-[15px] w-[120px]">
					Mã
				</label>
				<input
					type="text"
					id="text"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={product.id}
					readOnly
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="sale" className="mr-[15px] w-[120px]">
					Giảm giá
				</label>
				<input
					id="sale"
					type="text"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={sale}
					onChange={(e) => setSale(e.target.value)}
				/>
			</div>
			<div className="mb-[10px]">
				<div>
					<img src={product.image} alt="" />
				</div>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="label" className="mr-[15px] w-[120px]">
					Nhãn
				</label>
				<input
					type="text"
					id="label"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={product.label}
					readOnly
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
					value={name}
					onChange={(e) => setName(e.target.value)}
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
					value={oldPrice}
					onChange={(e) => setOldPrice(e.target.value)}
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
					value={newPrice}
					onChange={(e) => setNewPrice(e.target.value)}
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
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
			</div>
			<button
				className={`mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded`}
				onClick={handleEditProduct}
			>
				Lưu
			</button>
			<ToastContainer />
		</div>
	);
}
