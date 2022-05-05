import React from "react";
import { useParams } from "react-router-dom";
import DinnerTableProductsManagement from "./DinnerTableProductsManagement";
import SofaProductsManagement from "./SofaProductsManagement";
import TvshelfProductsManagement from "./TvshelfProductsManagement";
import LiquorCabinetProductsManagement from "./LiquorCabinetProductsManagement";
import TeaTableProductsManagement from "./TeaTableProductsManagement";
import ShoeCabinetProductsManagement from "./ShoeCabinetProductsManagement";
import WardrobeManagement from "./WardrobeManagement";
import BedProductsManagement from "./BedProductsManagement";
import MakeupTableProductsManagement from "./MakeupTableProductsManagement";
import KitchenCabinetManagement from "./KitchenCabinetManagement";

export default function ProductCategories({ setProduct }) {
	const params = useParams();

	return (
		<div>
			{params.productId === "sofa" && (
				<SofaProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "tv-shelf" && (
				<TvshelfProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "liquor-cabinet" && (
				<LiquorCabinetProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "tea-table" && (
				<TeaTableProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "shoe-cabinet" && (
				<ShoeCabinetProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "wardrobe" && (
				<WardrobeManagement setProduct={setProduct} />
			)}
			{params.productId === "bed" && (
				<BedProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "makeup-table" && (
				<MakeupTableProductsManagement setProduct={setProduct} />
			)}
			{params.productId === "kitchen-cabinet" && (
				<KitchenCabinetManagement setProduct={setProduct} />
			)}
			{params.productId === "dinner-table" && (
				<DinnerTableProductsManagement setProduct={setProduct} />
			)}
		</div>
	);
}
