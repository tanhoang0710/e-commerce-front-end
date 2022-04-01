import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../components/UI/Input";

export default function Checkout() {
	const cart = useSelector((state) => state.cart);

	const totalPrice = cart.items.reduce(
		(acc, item) => acc + item.totalPrice,
		0
	);
	return (
		<div className="mt-[150px] flex pb-4">
			<div className="w-[60%] pl-5">
				<form>
					<h2 className="text-[#555] font-normal uppercase text-[19px] leading-[30px]">
						THÔNG TIN THANH TOÁN
					</h2>
					<div className="flex gap-5 justify-between">
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
			<div className="w-[40%] ml-[30px] p-[30px] border-2 border-black h-[400px]">
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
					<p>{totalPrice.toFixed(3)} triệu VNĐ</p>
				</div>
				<p className="text-[#7a7978] font-light mt-6 text-[19px]">
					Không có hình thức thanh toán nào được thiết lập theo địa
					chỉ khu vực của bạn. Vui lòng liên hệ với quản trị website
					để hỗ trợ vấn đề này.
				</p>
				<Link
					to="/checkout"
					className="hover:bg-[#6b3927] inline-block cursor-pointer transition-all duration-300 bg-[#b76041] text-white text-center mt-[30px] pt-2 text-[19px] px-[18px] py-[6px]"
				>
					ĐẶT HÀNG
				</Link>
				<p className="text-[#7a7978] font-light mt-6 text-[16px]">
					Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng,
					tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể
					khác đã được mô tả trong chính sách riêng tư của chúng tôi.
				</p>
			</div>
		</div>
	);
}
