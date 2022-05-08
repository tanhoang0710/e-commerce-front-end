import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Button from "../components/UI/Button";
export default function Videos() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await fetch(
				"http://localhost:6969/e-commerce/api/videos",
				{
					headers: { "Access-Control-Allow-Origin": true },
				}
			);
			const data = await res.json();
			setVideos(data);
		};
		fetchCategories();
	}, []);
	const handleDeleteVideo = (index) => {
		toast.success(`Xoá video ${index + 1} thành công`);
	};

	return (
		<section className="bg-[#f2f5fc]">
			<Button color="blue" text="Thêm" className="ml-[15px]" />
			<div className=" flex flex-wrap items-center justify-center gap-[30px] pt-[16px] pb-[20px]">
				{videos.map((video, index) => (
					<div key={index}>
						<iframe
							width="350"
							height="200"
							src={video.link}
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
