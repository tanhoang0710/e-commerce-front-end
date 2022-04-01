import { RiArrowRightSFill } from "react-icons/ri";
import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import Image from "../../assets/images/dang-ky-bo-cong-thuong.png";

export default function ContactInformation() {
	return (
		<div className="h-[495px]">
			<h2 className="text-[22px] mb-3">THÔNG TIN LIÊN HỆ</h2>
			<div className="">
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px] mb-5 inline-block">
						Công ty TNHH Nội Thất Ibiz Vietnam
					</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px] mb-5 inline-block">
						Địa chỉ: Số 37 - Đường 08/03 Hữu Bằng - Thạch Thất - Hà
						Nội
					</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px] mb-5 inline-block">
						MST: 0108131230 Cấp ngày 15/01/2018 tại Phòng ĐKKD Hà
						Nội
					</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px] mb-5 inline-block">
						Đại Diện: Ông Đỗ Văn Khánh - Giám Đốc
					</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px] mb-5 inline-block">
						Điện thoại: 0375 8888 71
					</span>
				</div>
				<div>
					<RiArrowRightSFill className="inline-block" />
					<span className="text-[17px] mb-5 inline-block">
						Website: <Link to="/">www.noithatibizvietnam.vn</Link>
					</span>
				</div>
			</div>
			<div className="flex mb-8 gap-3">
				<div className="cursor-pointer border-[1px] flex items-center justify-center rounded-[6px] text-[22px] border-[#f1eada] border-solid w-8 h-8">
					<ImFacebook />
				</div>
				<div className="cursor-pointer border-[1px] flex items-center justify-center rounded-[6px] text-[22px] border-[#f1eada] border-solid w-8 h-8">
					<BsInstagram />
				</div>
				<div className="cursor-pointer border-[1px] flex items-center justify-center rounded-[6px] text-[22px] border-[#f1eada] border-solid w-8 h-8">
					<ImYoutube />
				</div>
			</div>
			<a
				href="http://online.gov.vn/Home/WebDetails/82518?AspxAutoDetectCookieSupport=1"
				target="_blank"
			>
				<div className="w-[125px]">
					<img src={Image} alt="" />
				</div>
			</a>
		</div>
	);
}
