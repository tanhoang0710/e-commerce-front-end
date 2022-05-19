import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
	addSingleItemToCart,
	removeItemFromCart,
	removeWholeItemFromCart,
} from "../store/cart-slice";
import AuthContext from "../components/context/auth-context";

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const history = useHistory();
	const authCtx = useContext(AuthContext);

	const totalPrice = cart.items.reduce(
		(acc, item) => acc + item.totalPrice,
		0
	);

	const addToCartHandler = (item) => {
		dispatch(addSingleItemToCart(item));
	};

	const removeFromCartHandler = (item) => {
		dispatch(removeItemFromCart(item.id));
	};

	const deleteItemHandler = (item) => {
		dispatch(removeWholeItemFromCart(item.id));
	};

	const handleClick = () => {
		history.push("/");
	};

	const backToProductHandler = () => {
		history.push("/products/sofa");
	};

	return (
		<>
			{cart.items.length <= 0 ? (
				<div className="mt-[83px] px-6 py-20 flex flex-col items-center">
					<h2 className="text-[#7a7978] font-light text-[19px]">
						Chưa có sản phẩm nào trong giỏ hàng
					</h2>
					<button
						className="mt-5 bg-[#1f0f07] px-5 py-2 text-white"
						onClick={handleClick}
					>
						QUAY TRỞ LẠI CỬA HÀNG
					</button>
				</div>
			) : (
				<div className="flex px-[15px] mt-[160px] pb-[80px]">
					<div className="w-[60%] pr-[30px]">
						<table className="w-full">
							<thead className="text-[#7a7978] font-light uppercase text-[19px] border-b-2">
								<tr>
									<th className="font-normal text-left">
										Sản phẩm
									</th>
									<th className="font-normal">Giá</th>
									<th className="font-normal">Số lượng</th>
									<th className="font-normal">Tạm tính</th>
								</tr>
							</thead>
							{cart.items.map((item) => (
								<tbody
									className="h-[75px] border-[#ebebeb] border-b-[1px]"
									key={item.id}
								>
									<tr>
										<td className="text-red-600 w-[60%] flex items-center h-[75px]">
											<IoIosCloseCircleOutline
												className="w-6 h-6 text-[#ccc] cursor-pointer mr-2"
												onClick={() =>
													deleteItemHandler(item)
												}
											/>
											<div className="w-[75px] h-[45px]">
												<img
													src={item.image}
													alt=""
													className="w-full object-cover"
												/>
											</div>
											<p className="flex-1 ml-5 font-normal w-[350px]">
												{item.name}
											</p>
										</td>
										<td className="text-center">{`${item.price} triệu VNĐ`}</td>
										<td className="text-center">
											<div className="flex w-[90px] h-10 border-[#ccc] border-[1px]">
												<div
													className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#ccc] transition-all duration-300 border-[#ccc] border-r-[1px] select-none"
													onClick={() =>
														removeFromCartHandler(
															item
														)
													}
												>
													-
												</div>
												<div className="w-10">
													<input
														className="d-block w-full h-full leading-10 ml-4"
														type="text"
														value={item.quantity}
														onChange={() => {}}
													/>
												</div>
												<div
													className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#ccc] transition-all duration-300 border-[#ccc] border-l-[1px] select-none"
													onClick={() =>
														addToCartHandler(item)
													}
												>
													+
												</div>
											</div>
										</td>
										<td className="text-center">{`${item.totalPrice.toFixed(
											3
										)} triệu VNĐ`}</td>
									</tr>
								</tbody>
							))}
						</table>
						<button
							className="mt-5 bg-[#1f0f07] pr-5 pl-3 py-2 text-white flex items-center"
							onClick={backToProductHandler}
						>
							<CgArrowLongLeft className="inline-block mr-3" />{" "}
							TIẾP TỤC XEM SẢN PHẨM
						</button>
					</div>
					<div className="w-[40%] pl-[30px]">
						<h2 className="text-[#7a7978] font-normal uppercase text-[19px] leading-[30px] border-b-[3px]">
							CỘNG GIỎ HÀNG
						</h2>
						<div className="flex justify-between leading-[30px] border-b-[3px] mt-[15px]">
							<p className="text-[#7a7978] text-[16px] font-light">
								Tạm tính
							</p>
							<p>{totalPrice.toFixed(3)} triệu VNĐ</p>
						</div>
						<div className="flex justify-between leading-[30px] border-b-[3px]">
							<p className="text-[#7a7978] text-[16px] font-light">
								Tổng
							</p>
							<p>{totalPrice.toFixed(3)} triệu VNĐ</p>
						</div>
						<Link
							to={authCtx.isLoggedIn ? "/checkout" : "/auth"}
							className="hover:bg-[#6b3927] block cursor-pointer transition-all duration-300 bg-[#b76041] text-white text-center mt-[30px] pt-2 text-[19px] px-[18px] py-[6px]"
						>
							TIẾN HÀNH THANH TOÁN
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
