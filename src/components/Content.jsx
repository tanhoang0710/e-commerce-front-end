import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/xuong-san-xuat-noi-that-oc-cho.jpg";
import Image2 from "../assets/images/AKA55781.jpg";

export default function Content(props) {
	const { type } = props;
	return (
		<section className="flex mt-[40px] h-[600px]">
			<div
				className={`w-[130%] ${type === "1" ? `order-1` : `order-2`}`}
			>
				<img
					src={type === "1" ? Image1 : Image2}
					alt="images"
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`pt-[105px] px-5 pb-5 bg-[#dfdfdf] ${
					type === "1" ? `order-2` : `order-1`
				}`}
			>
				<h3 className="text-[30px] text-[#787878] mb-7">
					{type === "1" ? `THIẾT KẾ NỘI THẤT` : `THI CÔNG NỘI THẤT`}
				</h3>
				<div className="text-[20px] text-[#969696] font-normal mb-7">
					{type === "1"
						? `Nội thất bằng gỗ óc chó mang đến một “hơi thở mới” trong
					lĩnh vực thiết kế nội thất, giúp cho không gian của gia đình
					trở nên sang trọng, hiện đại, thể hiện đẳng cấp riêng biệt
					của gia chủ.`
						: `Ibiz Vietnam tự tin là đơn vị cung cấp dịch vụ thi công nội thất gỗ óc chó trọn gói số 1 giúp khách hàng tiết kiệm tối đa thời gian, công sức, tiền bạc, đồng thời tận hưởng không gian nội thất sang trọng, đẳng cấp, tinh tế và tiện dụng nhất.`}
				</div>
				<div className="text-[20px] text-[#969696] font-normal mb-[30px]">
					Hãy để chúng tôi hỗ trợ bạn trong việc tạo nên dấu ấn tuyệt
					vời cho căn nhà của mình. Liên hệ ngay với Ibiz Vietnam để
					nhận được báo giá gỗ óc chó nhanh nhất!
				</div>
				<div className="flex justify-center">
					<Link
						to="/services/:serviceId"
						className="px-[18px] bg-[#1f0f07] text-white py-2"
					>
						XEM CHI TIẾT
					</Link>
				</div>
			</div>
		</section>
	);
}
