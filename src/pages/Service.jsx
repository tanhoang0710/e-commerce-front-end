import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import ServiceDetail2 from "../components/ServiceDetail2";

export default function Service() {
	const params = useParams();
	console.log(params);
	return (
		<section className="p-[30px] mt-[83px] flex">
			{params.serviceId === "design" ? (
				<ServiceDetail />
			) : (
				<ServiceDetail2 />
			)}
		</section>
	);
}
