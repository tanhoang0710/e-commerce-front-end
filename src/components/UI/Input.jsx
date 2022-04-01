import React from "react";

export default function Input(props) {
	const { placeholder, type = "email" } = props;
	return (
		<div className="mt-5 px-[10px] border-[#ccc] font-light border-[1px] transition-all duration-300 placeholder:">
			<input
				className="block py-[10px] font-light w-full"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
}
