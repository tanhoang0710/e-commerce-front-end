import React from "react";

export default function Label(props) {
	return (
		<div className="inline-block px-[10px] py-[6px] bg-[#f1eada] text-[#1f0f07] rounded-[50px] text-[13px] leading-[13px]">
			{props.children}
		</div>
	);
}
