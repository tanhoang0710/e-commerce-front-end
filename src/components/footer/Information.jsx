import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

export default function Information() {
	return (
		<div className="h-[495px]">
			<h2 className="text-[22px] mb-3">NỘI THẤT IBIZ VIỆT NAM</h2>
			<div className="flex items-center mb-[22px]">
				<RiArrowRightSFill className="inline-block" />
				<span className="text-[16px]">
					Phòng Giao Dịch Số 37 - Đường 08/03 Hữu Bằng - Thạch Thất -
					Hà Nội
				</span>
			</div>
			<h2 className="text-[22px] mb-3">XƯỞNG SẢN XUẤT</h2>
			<div className="flex items-center">
				<RiArrowRightSFill className="inline-block" />
				<span className="text-[17px]">
					Cơ Sở : Khu CN Bình Phú - Thạch Thất - Hà Nội
				</span>
			</div>
			<h2 className="text-[22px] mb-3">HOTLINE LIÊN HỆ:</h2>
			<div className="">
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px]">Hồng Anh: 0375888871</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px]">Mai Hồng: 0914797957</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px]">Phan Tám: 0382198686</span>
				</div>
			</div>
		</div>
	);
}
