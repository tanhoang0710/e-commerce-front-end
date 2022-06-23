import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/item-slice";

export default function ProductItem({ data }) {
	let cate = "sofa";

	const dispatch = useDispatch();

	const clickHandler = () => {
		const item = {
			...data,
		};
		dispatch(setItem(item));
	};

	switch (data.categoryId) {
		case "1":
			cate = "sofa";
			break;
		case "2":
			cate = "tv-shelf";
			break;
		case "3":
			cate = "liquor-cabinet";
			break;
		case "4":
			cate = "tea-table";
			break;
		case "5":
			cate = "shoe-cabinet";
			break;
		case "6":
			cate = "wardrobe";
			break;
		case "7":
			cate = "bed";
			break;
		case "8":
			cate = "makeup-table";
			break;
		case "9":
			cate = "kitchen-cabinet";
			break;
		case "10":
			cate = "dinner-table";
			break;
		default:
			cate = "sofa";
	}

	return (
		<Link to={`/products/${cate}/${data.id}`} onClick={clickHandler}>
			<div className="flex">
				<img src={data.img} alt="" className="w-[50px] h-[50px]" />
				<h2>{data.name}</h2>
			</div>
		</Link>
	);
}
