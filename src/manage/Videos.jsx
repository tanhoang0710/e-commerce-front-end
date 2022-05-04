import React from "react";
import { toast, ToastContainer } from "react-toastify";

const urls = [
	"https://www.youtube.com/embed/QTAlov-cVnM",
	"https://www.youtube.com/embed/J2r6RxoWphM",
	"https://www.youtube.com/embed/3lbRwsYtNIk",
	"https://www.youtube.com/embed/5pLEh4lmDFU",
	"https://www.youtube.com/embed/Ui8aeFCY164",
	"https://www.youtube.com/embed/iqdA4Fd4V6c",
];

export default function Videos() {
	const handleDeleteVideo = (index) => {
		toast.success(`Xoá video ${index + 1} thành công`);
	};

	return (
		<section className="bg-[#f2f5fc]">
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
						<button
							className={`mt-3 bg-transparent hover:bg-red-500 text-red-700 font-normal hover:text-white py-1 px-4 border border-red-500 border-solid hover:border-transparent rounded`}
							onClick={() => handleDeleteVideo(index)}
						>
							Xoá
						</button>
					</div>
				))}
			</div>
			<ToastContainer />
		</section>
	);
}
