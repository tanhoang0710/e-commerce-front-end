import React from "react";
import Information from "./Information";
import ContactInformation from "./ContactInformation";
import Support from "./Support";

export default function Footer(props) {
	return (
		<footer
			className="pt-10 px-[100px] bg-[#1f0f07] text-[#f1eada] h-[580px] relative before:content-[attr(before)] before:absolute before:left-0 before:w-full before:h-[1px] before:bg-[#f1eada] before:bottom-[60px]"
			before=""
		>
			<div className="columns-3">
				<Information />
				<ContactInformation />
				<Support suportItems={props.suportItems} />
			</div>
			<div>
				<div className="text-center text-[#ffffff80]">
					Copyright 2016 - 2022 © Nội Thất Ibiz Việt Nam
				</div>
			</div>
		</footer>
	);
}
