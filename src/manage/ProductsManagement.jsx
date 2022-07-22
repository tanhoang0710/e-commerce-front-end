import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../store/product-slice";
import { ToastContainer, toast } from "react-toastify";

export default function ProductsManagement() {
	const [categories, setCategories] = useState([]);
	const [isAdd, setIsAdd] = useState(false);
	const [sale, setSale] = useState(0);
	const [img, setImage] = useState("");
	const [label, setLabel] = useState("");
	const [name, setName] = useState("");
	const [oldPrice, setOldPrice] = useState("");
	const [newPrice, setNewPrice] = useState("");
	const [desc, setDesc] = useState("");
	const [categoryName, setCategoryName] = useState("");

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await fetch(
				"https://62d7a64b49c87ff2af39cb02.mockapi.io/categories"
			);
			const data = await res.json();
			setCategories(data);
		};
		fetchCategories();
	}, []);

	const history = useHistory();
	const dispatch = useDispatch();

	const handleClick = (category) => {
		history.push(`${url}/${category}`);
	};

	const { url } = useRouteMatch();

	const handleAddProduct = () => {
		dispatch(
			addProduct({
				id: uuidv4(),
				sale,
				img,
				label,
				name,
				oldPrice,
				newPrice,
				desc,
				categoryName,
			})
		);
		toast.success("Thêm sản phẩm thành công");
	};

	return (
		<section>
			<h2 className="text-[30px] ml-4 mb-5">Products Category</h2>
			<button
				className="ml-[15px] mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded"
				onClick={() => setIsAdd(!isAdd)}
			>
				Thêm
			</button>
			{isAdd && (
				<div className="max-w-[800px] border-[1px] border-solid border-black p-5 mt-5 ml-4">
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Giảm giá
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={sale}
						onChange={(e) => setSale(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Ảnh
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={img}
						onChange={(e) => setImage(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Nhãn
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={label}
						onChange={(e) => setLabel(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Tên
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Giá cũ
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={oldPrice}
						onChange={(e) => setOldPrice(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Giá mới
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={newPrice}
						onChange={(e) => setNewPrice(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Mô tả
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
					<label htmlFor="text" className="mr-[15px] w-[120px] block">
						Tên danh mục
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={categoryName}
						onChange={(e) => setCategoryName(e.target.value)}
					/>
					<button
						className="ml-[15px] mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded"
						onClick={handleAddProduct}
					>
						Thêm
					</button>
				</div>
			)}
			<div className="flex flex-wrap mt-5">
				{categories.map((category, index) => (
					<div
						className={`flex bg-[#bb9f9f] cursor-pointer mb-5 rounded-2xl w-[48%] mx-auto p-8 justify-center gap-[160px]`}
						key={index}
						onClick={() => handleClick(category.category)}
					>
						<div className="w-[50%]">
							<h2 className="text-[32px]">{category.name}</h2>
							<p className="text-[18px] text-[#5d5c5c]">
								{category.desc}
							</p>
						</div>
						<div className="w-[120px] h-[80px] rounded-2xl overflow-hidden">
							<img
								src={category.image}
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				))}
			</div>
			<ToastContainer />
		</section>
	);
}
