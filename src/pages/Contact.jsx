import React from "react";
import Image1 from "../assets/images/AKA8875.jpg";

export default function Contact() {
	return (
		<section className="flex mt-[40px] h-[600px]">
			<div className={`w-[85%]`}>
				<img
					src={Image1}
					alt="images"
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`pt-[105px] px-5 pb-5 bg-[#dfdfdf] w-[85%] flex flex-col items-center justify-center`}
			>
				<div className="text-[22px] text-[#555] font-normal">
					CÔNG TY TNHH NỘI THẤT IBIZ VIỆT NAM
				</div>
				<div className="text-[18px] text-[#868686] font-normal">
					🏠 Phòng Giao Dịch Số 9 – Thôn ba Mát / 37 – Đường 08/03.
					Hữu Bằng- Thạch Thất- Hà Nội
				</div>
				<div className="text-[18px] text-[#868686] font-normal">
					🏠 Xưởng sản xuất: Cơ Sở 1 Hữu Bằng- Thạch Thất- Hà Nội
				</div>
				<div className="text-[18px] text-[#868686] font-normal">
					Cơ Sở 2 Dị Nậu – Thạch Thất – Hà Nội
				</div>
				<div className="text-[18px] text-[#868686] font-normal">
					Cơ Sở 3 Khu CN Bình Phú – Thạch Thất – Hà Nội
				</div>
				<div className="text-[18px] text-[#868686] font-normal">
					☎️ Hotline: Hồng Anh 0375888871 – Mai Hồng ‭ 0914797957‬ –
					Phan Tám 0382198686
				</div>
			</div>
		</section>
	);
}
