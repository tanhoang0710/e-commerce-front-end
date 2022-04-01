import React from "react";

export default function Payment() {
	return (
		<div>
			<div className="bg-white mt-[100px] text-[#727171] font-light px-4 pb-[80px] pt-3 text-[18px] tracking-wide ">
				<h2 className="mb-[18px] font-normal text-[18px]">
					Hình thức thanh toán:
				</h2>
				<div className="mb-[18px]">
					Với hình thức thanh toán này, sau khi bạn hoàn thành các
					bước đăng ký trên website, bạn ra ngân hàng và chuyển tiền
					cho chúng tôi vào 1 trong những tài khoản dưới đây, sau đó
					bạn scan giấy xác nhận chuyển tiền (Ủy nhiệm chi) và gửi kèm
					theo yêu cầu hỗ trợ tới email: ibizfurniture@gmail.com hoặc
					chat trực tiếp với các nick kinh doanh trên website để xác
					nhận thanh toán.
				</div>
				<div className="mb-[18px]">Hình thức thanh toán:</div>
				<div className="mb-[18px]">
					<ul className="list-disc">
						<li className="mb-[12px] ml-[30px]">
							Tiền mặt sau khi nhận hàng
						</li>
						<li className="mb-[12px] ml-[30px]">
							Cà thẻ tín dụng sau khi nhận hàng
						</li>
						<li className="mb-[12px] ml-[30px]">
							Chuyển khoản sau khi nhận hàng
						</li>
					</ul>
				</div>
				<div className="mb-[18px]">Thông tin chuyển khoản:</div>
				<div className="mb-[18px] text-[22px] font-normal text-[#555960]">
					Vũ Thị Hồng Anh:
				</div>
				<div className="mb-[18px]">
					<ul className="list-disc">
						<li className="mb-[12px] ml-[30px]">
							Ngân hàng:{" "}
							<span className="font-normal">
								Ngân hàng Quốc tế VIB
							</span>
						</li>
						<li className="mb-[12px] ml-[30px]">
							Số tài khoản:{" "}
							<span className="font-normal">00203498</span>
						</li>
					</ul>
				</div>
				<h2 className="mb-[18px] font-normal text-[18px]">Lưu ý:</h2>
				<div className="mb-[18px]">
					– Vui lòng ghi rõ nội dung thanh toán tại phiếu gửi tiền ở
					ngân hàng cho số hóa đơn để chúng tôi có thể tự động xác
					nhận thanh toán.
				</div>
				<div className="mb-[18px]">
					– Chúng tôi sẽ không chịu trách nhiệm khi bạn chuyển tiền
					nhầm hoặc không phải tài khoản ghi trên website.
				</div>
			</div>
		</div>
	);
}
