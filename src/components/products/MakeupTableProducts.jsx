import React, { useEffect, useState } from "react";
import Slider1 from "../../assets/images/AKA0842.jpg";
import Slider2 from "../../assets/images/z3120552514105_c8b3b177912ec211085b9340572b79c7-1.jpg";
import Slider3 from "../../assets/images/sofa-go-oc-cho-Bac-My.jpg";
import Slider from "../Slider";
import Product from "./Product";

const images = [Slider1, Slider2, Slider3];

export default function MakeupTableProducts({ type }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await fetch(
				`https://62d7a64b49c87ff2af39cb02.mockapi.io/products?categoryName=${type}`,
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
			<h2 className="section-title">BÀN PHẤN</h2>
			<div className="flex flex-wrap">
				{products.length === 0 ? (
					<h2 className="section-title">
						HIỆN TẠI SẢN PHẨM ĐÃ HẾT HÀNG
					</h2>
				) : (
					products.map((product) => (
						<Product data={product} key={product.id} />
					))
				)}
			</div>
		</>
	);
}
