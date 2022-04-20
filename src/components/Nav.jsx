import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-2.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "./context/auth-context";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const productsName = [
	"Sofa gỗ",
	"Kệ Tivi",
	"Tủ rượu trang trí",
	"Bàn trà",
	"Tủ giày",
	"Tủ áo",
	"Giường ngủ",
	"Bàn phấn",
	"Tủ bếp",
	"Bàn ăn",
];

const productsPath = [
	"sofa",
	"tv-shelf",
	"liquor-cabinet",
	"tea-table",
	"shoe-cabinet",
	"wardrobe",
	"bed",
	"makeup-table",
	"kitchen-cabinet",
	"dinner-table",
];

const servicesName = ["Thiết kế nội thất", "Thi công nội thất"];
const servicesPath = ["design", "construct"];

export default function Nav() {
	const cart = useSelector((state) => state.cart);

	const authCtx = useContext(AuthContext);
	const history = useHistory();

	const logoutHandler = () => {
		firebase.auth().signOut();
		authCtx.logout();
		history.replace("/");
	};

	return (
		<>
			<nav
				className="flex justify-between z-50 items-center bg-[#4b3737] px-[50px] text-white fixed top-0 left-0 w-full"
			>
				<div className="w-[160px] h-[83px]">
					<NavLink to="/">
						<img src={Logo} alt="logo" className="w-full h-full" />
					</NavLink>
				</div>
				<div>
					<ul className="flex items-center mr-[320px] ml-10">
						<li className="uppercase px-[20px]">
							<NavLink to="/introduce">Giới thiệu</NavLink>
						</li>
						<li className="uppercase px-[20px] group relative">
							<NavLink to="/services">Dịch vụ</NavLink>
							<ul className="absolute left-0 top-[100%] bg-black w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 mt-1">
								{servicesName.map((name, index) => (
									<li key={index}>
										<Link
											to={`/services/${servicesPath[index]}`}
											className="p-2 block hover:bg-[#5F3916] transition-all"
										>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</li>
						<li className="uppercase px-[20px] relative group">
							<NavLink to="/products">Sản phẩm</NavLink>
							<ul className="absolute left-0 top-[100%] bg-black w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 mt-1">
								{productsName.map((name, index) => (
									<li key={index}>
										<Link
											to={`/products/${productsPath[index]}`}
											className="p-2 block hover:bg-[#5F3916] transition-all"
										>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</li>
						<li className="uppercase px-[20px]">
							<NavLink to="/videos">Video</NavLink>
						</li>
						<li className="uppercase px-[20px]">
							<NavLink to="/news">Tin tức</NavLink>
						</li>
						<li className="uppercase px-[20px]">
							<NavLink to="/contact">Liên hệ</NavLink>
						</li>
					</ul>
				</div>
				<div className="flex items-center mr-[45px]">
					{!authCtx.isLoggedIn ? (
						<Link to="/auth" className="mr-5 uppercase">
							Đăng nhập
						</Link>
					) : (
						<button
							className="mr-5 uppercase"
							onClick={logoutHandler}
						>
							Đăng xuất
						</button>
					)}
					{/* <div className="mr-6 px-[18px] py-[5px] rounded-full bg-[#1f0f07]">
						<span className="tracking-wide cursor-pointer">
							HOTLINE: 0375 8888 71
						</span>
					</div> */}
					<div className="flex items-center  cursor-pointer">
						<span className="mr-2">GIỎ HÀNG</span>
						<Link to="/cart">
							<div className="hover:bg-[#1f0f07] p-2 rounded-full transition-colors group relative">
								<FiShoppingCart />
								<div className="absolute right-[-20px] top-[100%] bg-black w-[260px] text-center text-[#ccc] font-light text-[18px] mt-3 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
									{cart.items.length <= 0 &&
										"Chưa có sản phẩm trong giỏ hàng"}
									{cart.items.length > 0 &&
										cart.items.map((item) => (
											<div key={item.id}>
												<p>{item.totalPrice}</p>
												<p>{item.name}</p>
												<p>{item.quantity}</p>
											</div>
										))}
								</div>
								<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
									{cart.items.length}
								</span>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
