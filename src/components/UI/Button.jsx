import React from "react";

export default function Button({ color, text, className }) {
	return (
		<button
			className={`mt-3 bg-transparent hover:bg-${color}-500 text-${color}-700 font-normal hover:text-white py-1 px-4 border border-${color}-500 border-solid hover:border-transparent rounded ${className}`}
		>
			{text}
		</button>
	);
}
