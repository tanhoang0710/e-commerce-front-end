import React from "react";
import Search from "../components/UI/Search";

export default function NotFound() {
	return (
		<div className="text-[#555] mt-[83px] bg-white px-4 pt-[60px] pb-[30px] flex">
			<div className="w-[25%] leading-[155px] text-[120px] text-[#d6d6d6]">
				404
			</div>
			<div className="w-[75%]">
				<h1 className="text-[30px] mb-[14px]">
					Oops! That page can’t be found.
				</h1>
				<p className="text-[20px] mb-[21px] font-light">
					It looks like nothing was found at this location. Maybe try
					one of the links below or a search?
				</p>
				<Search />
			</div>
		</div>
	);
}
