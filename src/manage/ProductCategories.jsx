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
				<SofaProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "tv-shelf" && (
				<TvshelfProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "liquor-cabinet" && (
				<LiquorCabinetProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "tea-table" && (
				<TeaTableProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "shoe-cabinet" && (
				<ShoeCabinetProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "wardrobe" && (
				<WardrobeManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "bed" && (
				<BedProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "makeup-table" && (
				<MakeupTableProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "kitchen-cabinet" && (
				<KitchenCabinetManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
			{params.productId === "dinner-table" && (
				<DinnerTableProductsManagement
					setProduct={setProduct}
					type={params.productId}
				/>
			)}
		</div>
	);
}
