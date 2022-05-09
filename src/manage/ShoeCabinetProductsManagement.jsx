import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";

export default function ShoeCabinetProductsManagement({ setProduct, type }) {
	const history = useHistory();
	const { url } = useRouteMatch();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await fetch(
				`http://localhost:6969/e-commerce/api/products?type=${type}`,
				{
					headers: { "Access-Control-Allow-Origin": true },
				}
			);
			const data = await res.json();
			setProducts(data);
		};
		fetchProduct();
	}, [type]);

	const handleDeleteProduct = (index) => {
		toast.success("Xoá sản phẩm thành công");
	};
	const handleEditProduct = (product) => {
		setProduct(product);
		history.push(`${url}/${product.id}/edit`);
	};

	return (
		<>
			{products.length === 0 ? (
				<div>
					<p className="text-[24px] ml-[22px]">Không có sản phẩm</p>
				</div>
			) : (
				<div>
					<p className="text-[24px] ml-[22px]">Tủ giày</p>
					<div className="overflow-y-scroll max-h-[500px]">
						{products.map((product) => (
							<div
								className="flex items-center bg-[#f5f7f9] w-[55%] mx-auto rounded-2xl shadow-2xl shadow-slate-500 p-[10px] gap-3 mb-5"
								key={product.id}
							>
								<div className="h-[60px] rounded-2xl overflow-hidden w-[60px] ml-[15px]">
									<img
										src={product.img}
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="w-[70%]">
									<h3 className="text-[20px]">
										{product.name}
									</h3>
									<h3 className="">{product.desc}</h3>
									<span className="text-[14px] mr-2 text-[#767575] line-through">
										Giá cũ: {product.oldPrice}
										{"đ"}
									</span>
									<span className="text-[14px] mr-2 text-[#767575]">
										Giá mới: {product.newPrice}
										{"đ"}
									</span>
									<span className="text-[14px] mr-2 text-[#767575]">
										Giảm giá: {product.sale}
										{"%"}
									</span>
								</div>
								<div className="flex-1 flex items-center justify-center gap-3">
									<div
										className="w-7 h-7 bg-[#1a99fb] flex items-center justify-center rounded-md text-white"
										onClick={() =>
											handleEditProduct(product)
										}
									>
										<MdEdit className="cursor-pointer text-[20px]" />
									</div>
									<div
										className="text-red-500 text-[30px] flex justify-center"
										onClick={() =>
											handleDeleteProduct(product.id)
										}
									>
										<TiDelete className="cursor-pointer" />
									</div>
								</div>
							</div>
						))}
						<ToastContainer className="text-[16px]" />
					</div>
				</div>
			)}
		</>
	);
}
