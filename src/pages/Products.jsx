import React from "react";
import { useParams } from "react-router-dom";

import SofaProducts from "../components/products/SofaProducts";
import BedProducts from "../components/products/BedProducts";
import DinnerTableProducts from "../components/products/DinnerTableProducts";
import KitchenCabinet from "../components/products/KitchenCabinet";
import LiquorCabinetProducts from "../components/products/LiquorCabinetProducts";
import MakeupTableProducts from "../components/products/MakeupTableProducts";
import ShoeCabinetProducts from "../components/products/ShoeCabinetProducts";
import TeaTableProducts from "../components/products/TeaTableProducts";
import TvshelfProducts from "../components/products/TvshelfProducts";
import Wardrobe from "../components/products/Wardrobe";

export default function Products() {
	const params = useParams();

	return (
		<div className="mt-[83px]">
			{params.productid === "sofa" && (
				<SofaProducts type={params.productid} />
			)}
			{params.productid === "tv-shelf" && (
				<TvshelfProducts type={params.productid} />
			)}
			{params.productid === "liquor-cabinet" && (
				<LiquorCabinetProducts type={params.productid} />
			)}
			{params.productid === "tea-table" && (
				<TeaTableProducts type={params.productid} />
			)}
			{params.productid === "shoe-cabinet" && (
				<ShoeCabinetProducts type={params.productid} />
			)}
			{params.productid === "wardrobe" && (
				<Wardrobe type={params.productid} />
			)}
			{params.productid === "bed" && (
				<BedProducts type={params.productid} />
			)}
			{params.productid === "makeup-table" && (
				<MakeupTableProducts type={params.productid} />
			)}
			{params.productid === "kitchen-cabinet" && (
				<KitchenCabinet type={params.productid} />
			)}
			{params.productid === "dinner-table" && (
				<DinnerTableProducts type={params.productid} />
			)}
		</div>
	);
}
