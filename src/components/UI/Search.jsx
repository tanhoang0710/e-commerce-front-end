import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Search() {
	return (
		<div className="flex w-full">
			<input
				type="text"
				placeholder="Tìm kiếm..."
				className="flex-1 px-[15px] border-[1px] border-solid border-[#ccc]"
			/>
			<div>
				<Link
					to="/"
					className="flex w-[38px] h-[38px] bg-[#1f0f07] text-white items-center justify-center"
				>
					<BsSearch />
				</Link>
			</div>
		</div>
	);
}
