import React from "react";
import Flickity from "react-flickity-component";
import Image1 from "../../assets/images/AKA80001.jpg";
import Image2 from "../../assets/images/sofa-go-oc-cho-nhap-khau-Bac-My.jpg";
import Image3 from "../../assets/images/demo4.jpg";
import Image4 from "../../assets/images/sofa-go-oc-cho-nhap-khau-Bac-My-3-1.jpg";
import Image5 from "../../assets/images/1-qadvc.jpg";
import Image6 from "../../assets/images/AKA6180-1.jpg";
import Image7 from "../../assets/images/AKA61631.jpg";
import Image8 from "../../assets/images/b85e62a8ce133a4d6302.jpg";
import Image9 from "../../assets/images/2a.RGB_color1.jpg";

const flickityOptions = {
	initialIndex: 1,
	lazyLoad: false,
	groupCells: true,
	dragThreshold: 5,
	cellAlign: "left",
	wrapAround: true,
	prevNextButtons: true,
	percentPosition: true,
	pageDots: false,
	rightToLeft: false,
	autoPlay: false,
	selectedAttraction: 0.1,
	parallax: 0,
	friction: 0.6,
};

export default function SectionContent(props) {
	const { type, option } = props;
	return (
		<div className="flex">
			<div
				className={`w-[50%] overflow-hidden ${
					option === "left" ? `order-1` : `order-2`
				}`}
			>
				<Flickity
					options={flickityOptions}
					className="carousel relative"
				>
					<img
						src={
							type === 1
								? Image1
								: type === 2
								? Image4
								: type === 3
								? Image7
								: Image2
						}
						alt=""
					/>
					<img
						src={
							type === 1
								? Image2
								: type === 2
								? Image5
								: type === 3
								? Image8
								: Image2
						}
						alt=""
					/>
					<img
						src={
							type === 1
								? Image3
								: type === 2
								? Image6
								: type === 3
								? Image9
								: Image2
						}
						alt=""
					/>
				</Flickity>
			</div>
			<div
				className={`bg-[#e2e2e2] px-[30px] pt-[100px] w-[50%] text-[#727171] font-light text-[18px] tracking-wide ${
					type === "left" ? `order-2 pb-[100px]` : `order-1 pb-0`
				}`}
			>
				{type === 1 && (
					<>
						<h2 className="mb-[18px] text-[22px] font-normal text-red-600">
							LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN
						</h2>
						<div className="mb-[18px]">
							– Chúng tôi cấp giấy phép sử dụng để bạn có thể mua
							sắm trên web trong khuôn khổ Điều khoản và Điều kiện
							sử dụng đã đề ra.
						</div>
						<div className="mb-[18px]">
							Sau một quá trình tìm hiểu và nghiên cứu về lối
							sống, văn hoá của người dân trong thời buổi kinh tế
							hội nhập và phát triển, xưởng gỗ của chúng tôi đã
							quyết định chuyển sang một hướng đi mới đó là chuyên
							cung cấp, sản xuất và thi công các loại gỗ cao cấp
							để phục vụ các khách hàng tầm trung trở lên.
						</div>
						<div className="mb-[18px]">
							Chúng tôi tự tin có đội ngũ thợ mộc với hơn 30 năm
							kinh nghiệm trong nghề, đã từng cho ra những sản
							phẩm đẹp mắt và có chất lượng cao, vậy thì không có
							lý do gì mà chúng tôi lại không dám dấn thân vào con
							đường đầy thách thức, mạo hiểm nhưng lại hứa hẹn rất
							nhiều tiềm năng như vậy.
						</div>
					</>
				)}
				{type === 2 && (
					<>
						<h2 className="mb-[18px] text-[22px] font-normal text-red-600">
							LĨNH VỰC KINH DOANH
						</h2>
						<div className="mb-[18px]">
							Nội thất gỗ óc chó Ibiz Vietnam có một mong muốn tha
							thiết đó là mang đến cho khách hàng những sản phẩm
							có giá trị, có “linh hồn”, biến nội thất không chỉ
							đơn giản là những đồ vật vô tri vô giác mà nó còn là
							người bạn đồng hành trong suốt cuộc đời của mỗi gia
							chủ. Đổi lại, với mỗi một dấu ấn trên từng sản phẩm,
							Ibiz Vietnam hy vọng Quý khách hàng sẽ nhớ tới chúng
							tôi là một đơn vị đối tác uy tín, chuyên nghiệp và
							nhớ về những năm tháng bắt đầu đồng hành cùng với
							“người bạn nội thất” của mình.
						</div>
						<div className="mb-[18px]">
							Chúng tôi chuyên thi công các căn hộ trọn gói nội
							thất bao gồm:
						</div>
						<div className="mb-[18px]">
							– Phòng khách: Sofa, kệ tivi, tủ rượu, tủ trang trí,
							vách ngăn trang trí, vách ốp tường, cột lam…
						</div>
						<div className="mb-[18px]">
							– Phòng ăn: Bàn ghế ăn, tủ bếp, bàn đảo,…
						</div>
						<div className="mb-[18px]">
							– Phòng ngủ: Giường, kệ tivi, tủ quần áo, bàn học,
							giá sách, vách ốp giường,…
						</div>
						<div className="mb-[18px]">
							– Phòng thờ: Án gian, vách tủ thờ CNC,…
						</div>
					</>
				)}
				{type === 3 && (
					<>
						<h2 className="mb-[18px] text-[22px] font-normal text-red-600">
							SỨ MỆNH – TẦM NHÌN
						</h2>
						<div className="mb-[18px]">
							Với phương châm: “Chất lượng tiên phong – Sản phẩm
							xứng tầm – Giá thành hợp lý”, chúng tôi mong muốn
							mang đến cho Quý khách hàng những sản phẩm ưng ý
							nhất, giá trị nhất với một mức giá phù hợp để ước mơ
							sở hữu đồ nội thất cao cấp dần hiện thực hóa tới
							từng phân khúc khách hàng.
						</div>
						<div className="mb-[18px]">
							Đến năm 2023, Ibiz Vietnam sẽ mang những “linh hồn”
							của nội thất Việt sang thị trường quốc tế, chứng
							minh cho bạn bè năm châu thấy rằng những người thợ
							mộc tài năng của chúng ta không hề thua kém bất kỳ
							ai vì chúng ta có niềm đam mê bất tận với thiết kế
							nội thất và những khối óc sáng tạo miệt mài, không
							ngừng nghỉ.
						</div>
						<div className="mb-[18px]">
							Vì vậy Ibiz chúng tôi đang ngày càng hoàn thiện bản
							thân mình hơn nữa để có thể thực hiện được những ước
							mơ này trong một tương lai không xa.
						</div>
					</>
				)}
			</div>
		</div>
	);
}
