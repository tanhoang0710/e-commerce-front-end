import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import Label from "../UI/Label";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/item-slice";

export default function Product({ data }) {
	const match = useRouteMatch();

	const dispatch = useDispatch();

	const clickHandler = () => {
		const item = {
			...data,
		};
		dispatch(setItem(item));
	};

	return (
		<div
			before=""
			className="w-[33.3333333%] h-[453px] px-[10px] relative before:content-[attr(before)] before:absolute before:left-[10px] before:w-[486.388px] before:h-full before:bg-[#3a2008a1] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-800 mb-5 cursor-pointer before:-z-10"
			key={data.id}
		>
			<Link to={`${match.url}/${data.id}`} onClick={clickHandler}>
				<img
					src={data.image}
					className="w-full h-full object-cover"
					alt="slide"
				/>
				<div className="absolute bottom-[50%] pt-[10px] translate-y-1/2 pb-[20px] w-[486.388px] flex flex-col items-center">
					<Label>{data.label}</Label>
					<div className="text-[#fdfce1] text-[15px] uppercase mt-[15px]">
						{data.name}
					</div>
					<div className="text-[#fdfce1]">
						{data.sale !== "0%" && (
							<span className="opacity-60 line-through">
								{data.oldPrice}{" "}
							</span>
						)}
						<span> {data.newPrice}</span>
					</div>
				</div>
				<span
					className={`absolute top-[10%] left-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-white text-[16px] transform translate-x-1/2 w-[45px] h-[45px] -translate-y-1/2 bg-[#1f0f07] rounded-full ${
						data.sale === "0%" ? "hidden" : ""
					}`}
				>
					-{data.sale}
				</span>
			</Link>
			{/* <Route path={`${match.path}/:id`}>
				<ProductDetail data={data} />
			</Route> */}
		</div>
	);
}
