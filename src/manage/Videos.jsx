import React from "react";
import Button from "../components/UI/Button";

const urls = [
	"https://www.youtube.com/embed/QTAlov-cVnM",
	"https://www.youtube.com/embed/J2r6RxoWphM",
	"https://www.youtube.com/embed/3lbRwsYtNIk",
	"https://www.youtube.com/embed/5pLEh4lmDFU",
	"https://www.youtube.com/embed/Ui8aeFCY164",
	"https://www.youtube.com/embed/iqdA4Fd4V6c",
];

export default function Videos() {
	return (
		<section className="bg-[#f2f5fc]">
			<Button color="blue" text="Thêm" className="ml-[15px]" />
			<div className=" flex flex-wrap items-center justify-center gap-[30px] pt-[16px] pb-[20px]">
				{urls.map((url, index) => (
					<div key={index}>
						<iframe
							width="350"
							height="200"
							src={url}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<Button color="red" text="Xoá" />
					</div>
				))}
			</div>
		</section>
	);
}
