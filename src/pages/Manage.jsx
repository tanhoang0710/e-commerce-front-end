import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineShoppingBag, HiVideoCamera } from "react-icons/hi";
import { FaBarcode } from "react-icons/fa";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

import General from "../manage/General";
import Videos from "../manage/Videos";
import DiscountCode from "../manage/DiscountCode";
import AddDiscountCode from "../manage/AddDiscountCode";
import ProductsManagement from "../manage/ProductsManagement";
import ProductCategories from "../manage/ProductCategories";
import EditProduct from "../manage/EditProduct";
import EditDiscountCode from "../manage/EditDiscountCode";

const categories = [
	{
		type: "general",
		name: "Quản lí",
		icon: <MdOutlineSpaceDashboard className="mr-[15px]" />,
	},
	{
		type: "products",
		name: "Sản phẩm",
		icon: <HiOutlineShoppingBag className="mr-[15px]" />,
	},
	{
		type: "videos",
		name: "Video",
		icon: <HiVideoCamera className="mr-[15px]" />,
	},
	{
		type: "discountCode",
		name: "Mã giảm giá",
		icon: <FaBarcode className="mr-[15px]" />,
	},
];

export default function Manage() {
	const [categoryName, setCategoryName] = useState("general");
	const [product, setProduct] = useState({});
	const [discountCode, setDiscountCode] = useState({});

	let { path, url } = useRouteMatch();

	return (
		<div className="mt-[83px] flex">
			<div className="w-[25%] bg-[#4b3737] text-white p-[30px] pt-[6px] pr-0">
				<h3 className="text-[30px]">IBiz Vietnam</h3>
				<ul className="mt-[30px]">
					{categories.map((category, index) => (
						<Link
							key={index}
							to={`${url}/${category.type}`}
							className={
								category.type === categoryName
									? "flex items-center p-[10px] rounded-l-[20px] mt-5 bg-white text-[#4b3737] cursor-pointer"
									: "flex items-center p-[10px] rounded-l-[20px] mt-5 text-[#fff] cursor-pointer"
							}
							onClick={() => setCategoryName(category.type)}
						>
							{category.icon}
							<span>{category.name}</span>
						</Link>
					))}
				</ul>
			</div>
			<div className="w-[75%] flex flex-col">
				<div className="flex items-center justify-between mx-6">
					<h3 className="text-[26px]">Quản lí</h3>
					<div>
						<p>Admin</p>
						<span className="text-[#a9a8a8] text-light">
							Super admin
						</span>
					</div>
				</div>
				<Switch>
					<Route exact path={`${path}/:${categoryName}`}>
						{categoryName === "general" && <General />}
						{categoryName === "videos" && <Videos />}
						{categoryName === "discountCode" && (
							<DiscountCode setDiscountCode={setDiscountCode} />
						)}
						{categoryName === "products" && <ProductsManagement />}
					</Route>
					<Route exact path={`${path}/discountCode/:option`}>
						<AddDiscountCode />
					</Route>
					<Route exact path={`${path}/discountCode/:id/edit`}>
						<EditDiscountCode
							discountCode={discountCode}
							setDiscountCode={setDiscountCode}
						/>
					</Route>
					<Route exact path={`${path}/products/:productId`}>
						<ProductCategories setProduct={setProduct} />
					</Route>
					<Route exact path={`${path}/products/:productId/:id/edit`}>
						<EditProduct product={product} />
					</Route>
				</Switch>
			</div>
		</div>
	);
}
