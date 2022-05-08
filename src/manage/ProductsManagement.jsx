import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

export default function ProductsManagement() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await fetch(
				"http://localhost:6969/e-commerce/api/categories",
				{
					headers: { "Access-Control-Allow-Origin": true },
				}
			);
			const data = await res.json();
			setCategories(data);
		};
		fetchCategories();
	}, []);

	const history = useHistory();

	const handleClick = (category) => {
		history.push(`${url}/${category}`);
	};

	const { url } = useRouteMatch();

	return (
		<section>
			<h2 className="text-[30px] ml-4 mb-5">Products Category</h2>
			<div className="flex flex-wrap mt-5">
				{categories.map((category, index) => (
					<div
						className={`flex bg-[#bb9f9f] cursor-pointer mb-5 rounded-2xl w-[48%] mx-auto p-8 justify-center gap-[160px]`}
						key={index}
						onClick={() => handleClick(category.category)}
					>
						<div className="w-[50%]">
							<h2 className="text-[32px]">{category.name}</h2>
							<p className="text-[18px] text-[#5d5c5c]">
								{category.desc}
							</p>
						</div>
						<div className="w-[120px] h-[80px] rounded-2xl overflow-hidden">
							<img
								src={category.image}
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
