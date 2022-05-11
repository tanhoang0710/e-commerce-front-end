import React, { useEffect, useState } from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";
import Product from "./Product";
const images = [Slider1, Slider2, Slider3];

export default function TvshelfProducts({ type }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await fetch(
				`http://localhost:6969/e-commerce/api/products?type=${type}`,
				{
					headers: { "Access-Control-Allow-Origin": true },
				}
			);
			const data = await res.json();
			setProducts(data);
		};
		fetchProduct();
	}, [type]);

	return (
		<>
			<Slider images={images} />
			<h2 className="section-title">KỆ TIVI</h2>
			<div className="flex flex-wrap">
				{products.length === 0 ? (
					<p className="text-[24px] ml-[22px]">Không có sản phẩm</p>
				) : (
					products.map((product) => (
						<Product data={product} key={product.id} />
					))
				)}
			</div>
		</>
	);
}
