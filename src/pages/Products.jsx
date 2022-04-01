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
			{params.productid === "sofa" && <SofaProducts />}
			{params.productid === "tv-shelf" && <TvshelfProducts />}
			{params.productid === "liquor-cabinet" && <LiquorCabinetProducts />}
			{params.productid === "tea-table" && <TeaTableProducts />}
			{params.productid === "shoe-cabinet" && <ShoeCabinetProducts />}
			{params.productid === "wardrobe" && <Wardrobe />}
			{params.productid === "bed" && <BedProducts />}
			{params.productid === "makeup-table" && <MakeupTableProducts />}
			{params.productid === "kitchen-cabinet" && <KitchenCabinet />}
			{params.productid === "dinner-table" && <DinnerTableProducts />}
		</div>
	);
}
