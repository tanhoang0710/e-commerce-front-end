import React from "react";

const urls = [
	"https://www.youtube.com/embed/QTAlov-cVnM",
	"https://www.youtube.com/embed/J2r6RxoWphM",
	"https://www.youtube.com/embed/3lbRwsYtNIk",
	"https://www.youtube.com/embed/5pLEh4lmDFU",
	"https://www.youtube.com/embed/Ui8aeFCY164",
	"https://www.youtube.com/embed/iqdA4Fd4V6c",
];

export default function Video() {
	return (
		<div className="mt-[83px] flex flex-wrap items-center justify-center gap-[30px] pt-[60px] pb-[90px]">
			{urls.map((url, index) => (
				<div key={index}>
					<iframe
						width="700"
						height="414"
						src={url}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			))}
		</div>
	);
}
