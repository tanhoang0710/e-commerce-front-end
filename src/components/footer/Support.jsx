import React from "react";
import { Link } from "react-router-dom";

export default function Support(props) {
	const { suportItems } = props;

	return (
		<div className="h-[495px]">
			<h2 className="text-[22px] mb-3">HỖ TRỢ KHÁCH HÀNG</h2>
			<ul>
				{suportItems
					.filter((item) => item.id !== 10)
					.map((item, index) => (
						<li key={index}>
							<Link
								className="block pt-[5px] py-[7px] border-b-[0.5px] border-[#f1eada] border-solid"
								to={item.path}
							>
								{item.name}
							</Link>
						</li>
					))}
				<li>
					<Link className="block pt-[5px]" to={suportItems[9].path}>
						{suportItems[9].name}
					</Link>
				</li>
			</ul>
		</div>
	);
}
