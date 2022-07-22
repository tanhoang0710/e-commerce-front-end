import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../components/UI/Input";
import { AiFillTag } from "react-icons/ai";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import { updateDiscountCode } from "../store/discountCode-slice";

export default function Checkout() {
	const cart = useSelector((state) => state.cart);

	const totalPrice = cart.items.reduce(
		(acc, item) => acc + item.totalPrice,
		0
	);

	const form = useRef();
	const dispatch = useDispatch();

	const [discountCode, setDiscountCode] = useState("");
	const [money, setMoney] = useState(totalPrice);

	const history = useHistory();
	const backToCartHandler = () => {
		history.push("/cart");
	};

	const handleApplyDiscountCode = async () => {
		const res = await fetch(
			`https://62d7a64b49c87ff2af39cb02.mockapi.io/discountCodes?code=${discountCode}`,
			{
				headers: { "Access-Control-Allow-Origin": true },
			}
		);
		const data = await res.json();
		if (data[0]) {
			const from = moment.utc(data[0].from);
			const to = moment.utc(data[0].to);
			const current = moment(new Date());
			const isBetween = current.isBetween(from, to, undefined, "()");
			if (data[0].time >= 1 && data[0].status === "ACTIVE" && isBetween) {
				setMoney((totalPrice * (100 - data[0].value)) / 100);
				toast.success("Thêm mã giảm giá thành công");
			} else {
				setMoney(totalPrice);
				toast.error("Mã giảm giá không hợp lệ");
			}
		} else {
			setMoney(totalPrice);
			toast.error("Mã giảm giá không tồn tại");
		}
	};

	const handleCheckout = async () => {
		alert("Bạn đã đặt hàng thành công");
		// giảm số lần còn sử dụng được xuống 1
		const res = await fetch(
			`https://62d7a64b49c87ff2af39cb02.mockapi.io/discountCodes?code=${discountCode}`,
			{
				headers: { "Access-Control-Allow-Origin": true },
			}
		);
		const data = await res.json();
		dispatch(
			updateDiscountCode({
				...data[0],
				time: data[0].time - 1,
			})
		);
	};

	return (
		<div className="mt-[150px] flex pb-4">
			<div className="w-[60%] pl-5">
				<form ref={form}>
					<h2 className="text-[#555] font-normal uppercase text-[19px] leading-[30px]">
						THÔNG TIN THANH TOÁN
					</h2>
					<div className="flex justify-between gap-5">
						<div className="w-[50%]">
							<Input placeholder="Tên" />
						</div>
						<div className="w-[50%]">
							<Input placeholder="Họ" />
						</div>
					</div>
					<Input placeholder="Địa chỉ" />
					<Input placeholder="Tỉnh / thành phố" />
					<Input placeholder="Số điện thoại" />
					<Input placeholder="Email" type="email" />
					<h2 className="text-[#555] mt-4 font-normal uppercase text-[19px] leading-[30px]">
						THÔNG TIN BỔ SUNG
					</h2>
					<textarea
						name=""
						id=""
						cols="30"
						rows="5"
						className="w-full border-[#ccc] border-[1px] outline-none h-fit"
					></textarea>
				</form>
			</div>
			<div className="w-[40%] ml-[30px] p-[30px] border-2 border-black">
				<h2 className="text-[#7a7978] font-normal uppercase text-[19px] leading-[30px]">
					ĐƠN HÀNG CỦA BẠN
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
					<p>{money.toFixed(3)} triệu VNĐ</p>
				</div>
				<p className="text-[#7a7978] font-light mt-6 text-[19px]">
					Không có hình thức thanh toán nào được thiết lập theo địa
					chỉ khu vực của bạn. Vui lòng liên hệ với quản trị website
					để hỗ trợ vấn đề này.
				</p>
				<h2 className="text-[#7a7978] font-normal text-normal text-[19px] leading-[30px] border-b-[3px] mt-5">
					<AiFillTag className="inline-block mr-[6px]" />
					Phiễu ưu đãi
				</h2>
				<div className="mt-5 px-[10px] border-[#ccc] border-[1px] transition-all duration-300">
					<input
						className="block w-full py-[6px]"
						type="text"
						placeholder="Mã ưu đãi"
						value={discountCode}
						onChange={(e) => setDiscountCode(e.target.value)}
					/>
				</div>
				<div
					className="text-center border-[#ccc] text-[18px] font-normal py-1 text-[#696969] border-[1px] bg-inherit hover:bg-[#ccc] w-full mt-[15px] transition-all duration-300"
					onClick={handleApplyDiscountCode}
				>
					Áp dụng
				</div>
				<button
					className="hover:bg-[#6b3927] inline-block cursor-pointer transition-all duration-300 bg-[#b76041] text-white text-center mt-[30px] pt-2 text-[19px] px-[18px] py-[6px]"
					onClick={handleCheckout}
				>
					ĐẶT HÀNG
				</button>
				<button
					className="hover:bg-[#6b3927] inline-block cursor-pointer transition-all duration-300 bg-[#b76041] text-white text-center mt-[30px] pt-2 text-[19px] px-[18px] py-[6px] ml-6"
					onClick={backToCartHandler}
				>
					QUAY TRỞ LẠI GIỎ HÀNG
				</button>
				<p className="text-[#7a7978] font-light mt-6 text-[16px]">
					Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng,
					tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể
					khác đã được mô tả trong chính sách riêng tư của chúng tôi.
				</p>
			</div>
			<ToastContainer />
		</div>
	);
}
