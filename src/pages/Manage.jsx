import React from "react";
import { MdOutlineSpaceDashboard, MdGroups } from "react-icons/md";
import {
	HiOutlineClipboardList,
	HiOutlineShoppingBag,
	HiOutlineCurrencyDollar,
} from "react-icons/hi";

export default function Manage() {
	return (
		<div className="mt-[83px] flex">
			<div className="w-[25%] bg-[#4b3737] text-white p-[30px] pt-[6px] pr-0">
				<h3 className="text-[30px]">IBiz Vietnam</h3>
				<ul className="mt-[30px]">
					<li className="flex items-center p-[10px] rounded-l-[20px] bg-white text-[#4b3737] cursor-pointer">
						<MdOutlineSpaceDashboard className="mr-[15px]" />
						<span>Quản lí</span>
					</li>
				</ul>
			</div>
			<div className="w-[75%]">
				<div className="flex items-center justify-between mx-6">
					<h3 className="text-[26px]">Quản lí</h3>
					<div>
						<p>Admin</p>
						<span className="text-[#a9a8a8] text-light">
							Super admin
						</span>
					</div>
				</div>
				<div className="bg-[#f2f5fc]">
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
			</div>
		</div>
	);
}
