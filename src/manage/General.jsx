import React from "react";
import { MdGroups } from "react-icons/md";
import {
	HiOutlineClipboardList,
	HiOutlineShoppingBag,
	HiOutlineCurrencyDollar,
} from "react-icons/hi";

export default function General() {
	return (
		<div className="bg-[#f2f5fc] flex-1">
			<div className=" flex gap-5 px-3 pt-9">
				<div className="w-[25%] bg-white flex p-[30px] justify-around">
					<div>
						<span className="text-[30px] font-bold text-black">
							54
						</span>
						<p className="text-[#a9a8a8] font-light text-[16px]">
							Khách hàng
						</p>
					</div>
					<MdGroups
						color="#4b3737"
						className="text-[30px] mt-[8px]"
					/>
				</div>
				<div className="w-[25%] bg-white flex p-[30px] justify-around">
					<div>
						<span className="text-[30px] font-bold text-black">
							79
						</span>
						<p className="text-[#a9a8a8] font-light text-[16px]">
							Dự án
						</p>
					</div>
					<HiOutlineClipboardList
						color="#4b3737"
						className="text-[30px] mt-[8px]"
					/>
				</div>
				<div className="w-[25%] bg-white flex p-[30px] justify-around">
					<div>
						<span className="text-[30px] font-bold text-black">
							124
						</span>
						<p className="text-[#a9a8a8] font-light text-[16px]">
							Đơn hàng
						</p>
					</div>
					<HiOutlineShoppingBag
						color="#4b3737"
						className="text-[30px] mt-[8px]"
					/>
				</div>
				<div className="w-[25%] bg-white flex p-[30px] justify-around">
					<div>
						<span className="text-[30px] font-bold text-black">
							$6k
						</span>
						<p className="text-[#a9a8a8] font-light text-[16px]">
							Thu nhập
						</p>
					</div>
					<HiOutlineCurrencyDollar
						color="#4b3737"
						className="text-[30px] mt-[8px]"
					/>
				</div>
			</div>
		</div>
	);
}
