import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const inputs = [
	{
		icon: <FaUserCircle />,
		placeholder: "Họ và tên...",
	},
	{
		icon: <HiPhone />,
		placeholder: "Số điện thoại...",
	},
	{
		icon: <IoHome />,
		placeholder: "Địa chỉ của bạn...",
	},
];

export default function ContactCategory() {
	return (
		<section className="flex w-full">
			<div className="w-[50%] bg-[#949599] text-[#f1f1f1] px-[10px] py-9 flex flex-col justify-center items-center">
				<span className="text-[18px] font-light mb-1">
					BẠN ĐANG ẤP Ủ Ý TƯỞNG VỀ NGÔI NHÀ CỦA MÌNH?
				</span>
				<span className="text-[22px] mb-3">HÃY LIÊN HỆ NGAY</span>
				<span className="font-light text-[18px]">
					CHÚNG TÔI SẼ GIÚP HIỆN THỰC HÓA ƯỚC MƠ VỀ TỔ ẤM CỦA BẠN!
				</span>
			</div>
			<div className="w-[50%] bg-[#bdbec2] px-[16px] py-[28px]">
				<form action="" className="flex gap-[10px]">
					<div className="w-[50%]">
						{inputs.map((input, index) => (
							<div
								className="flex items-center mb-[5px]"
								key={index}
							>
								<div className="bg-white px-2 py-[14px] border-r-[1px] border-[#ccc]">
									{input.icon}
								</div>
								<input
									type="text"
									placeholder={input.placeholder}
									className="flex-1 p-[10px] font-light leading-none "
								/>
							</div>
						))}
					</div>
					<div className="w-[50%]">
						<div className="flex items-center mb-[5px]">
							<div className="bg-white px-2 py-[14px] border-r-[1px] border-[#ccc]">
								<FaEnvelopeOpen />
							</div>
							<input
								type="text"
								placeholder="Địa chỉ của bạn..."
								className="flex-1 p-[10px] font-light leading-none "
							/>
						</div>
						<div className="flex items-center mb-[5px]">
							<div className="bg-white px-2 py-[34px] border-r-[1px] border-[#ccc]">
								<FaComment />
							</div>
							<div className="flex flex-1">
								<textarea
									className="flex-1 p-[10px] font-light leading-none"
									rows="4"
									placeholder="Ghi chú..."
								/>
								<button className="p-3 bg-[#1f0f07] text-white">
									GỬI
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}
