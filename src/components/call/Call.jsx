import React from "react";
import { IoCall } from "react-icons/io5";
import "./Call.css";
export default function Call() {
	return (
		<a href="tel:0869852063" className="fixed left-[25px] bottom-[25px]">
			<div class="content-center ">
				<div class="pulse">
					<IoCall className="text-white text-[26px]" />
				</div>
			</div>
		</a>
	);
}
