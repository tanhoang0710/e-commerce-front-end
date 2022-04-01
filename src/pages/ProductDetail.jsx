import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { addItemToCart } from "../store/cart-slice";

export default function ProductDetail({ item }) {
	console.log(item);
	const match = useRouteMatch();
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const addToCartHandler = () => {
		const price = parseFloat(item.newPrice.split(" ")[0]);
		const newItem = {
			id: item.id,
			newPrice: price,
			quantity: quantity,
			name: item.name,
			image: item.image,
		};
		dispatch(addItemToCart(newItem));
		console.log(cart);
	};

	return (
		<div className="mt-[150px] flex p-[15px]">
			<div className="w-[50%] overflow-hidden relative">
				<img src={item.image} alt="" />
				<span
					className={`absolute top-[10%] left-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-white text-[16px] transform translate-x-1/2 w-[45px] h-[45px] -translate-y-1/2 bg-[#1f0f07] rounded-full ${
						item.sale === "0%" ? "hidden" : ""
					}`}
				>
					-{item.sale}
				</span>
			</div>
			<div className="w-[50%] px-[30px]">
				<div>
					<Link
						to="/"
						className="hover:text-black text-[20px] text-[#ccc] font-light transition-all duration-200 mb-2"
					>
						TRANG CHỦ /{" "}
					</Link>
					<Link
						to={`/products/${match.params.productid}`}
						className="hover:text-black text-[20px] text-[#ccc] font-light transition-all duration-200 mb-2"
					>
						SẢN PHẨM
					</Link>
				</div>
				<p className="text-[24px] text-[#555] mb-4">{item.name}</p>
				<div className="w-[30px] h-[3px] bg-[#ccc] mb-5"></div>
				<div className="text-red-600 text-[28px]">
					{item.sale !== "0%" && (
						<span className="opacity-60 line-through">
							{item.oldPrice}{" "}
						</span>
					)}
					<span> {item.newPrice}</span>
				</div>
				<p className="text-[#555] text-[23px] mt-[5px] mb-[20px]">
					{item.desc}
				</p>
				<div className="flex">
					<div className="flex w-[90px] h-10 border-[#ccc] border-[1px]">
						<div
							className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#ccc] transition-all duration-300 border-[#ccc] border-r-[1px] select-none"
							onClick={() => {
								if (quantity >= 1) {
									setQuantity(
										(prevQuantity) => prevQuantity - 1
									);
								}
							}}
						>
							-
						</div>
						<div className="w-10">
							<input
								className="d-block w-full h-full leading-10 ml-4"
								type="text"
								value={quantity}
								onChange={() => setQuantity(quantity)}
							/>
						</div>
						<div
							className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#ccc] transition-all duration-300 border-[#ccc] border-l-[1px] select-none"
							onClick={() =>
								setQuantity((prevQuantity) => prevQuantity + 1)
							}
						>
							+
						</div>
					</div>
					<button
						className="bg-[#b76041] ml-5 px-[18px] py-[6px] text-white hover:bg-[#6b3927] cursor-pointer transition-all duration-300"
						onClick={addToCartHandler}
					>
						THÊM VÀO GIỎ HÀNG
					</button>
				</div>
			</div>
		</div>
	);
}
