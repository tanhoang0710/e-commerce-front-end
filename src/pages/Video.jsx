import React, { useEffect, useState } from "react";

export default function Video() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await fetch(
				"https://62d7a64b49c87ff2af39cb02.mockapi.io/videos"
			);
			const data = await res.json();
			setVideos(data);
		};
		fetchCategories();
	}, []);

	return (
		<div className="mt-[83px] flex flex-wrap items-center justify-center gap-[30px] pt-[60px] pb-[90px]">
			{videos.map((video, index) => (
				<div key={index}>
					<iframe
						width="700"
						height="414"
						src={video.link}
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
