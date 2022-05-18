import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addVideo, deleteVideo, fetchVideos } from "../store/video-slice";
import { v4 as uuidv4 } from "uuid";

export default function Videos() {
	const [isAdd, setIsAdd] = useState(false);
	const [link, setLink] = useState("");
	const linkRef = useRef();
	const dispatch = useDispatch();

	const videos = useSelector((state) => state.videos.videos);

	useEffect(() => {
		dispatch(fetchVideos());
	}, [dispatch]);

	const handleDeleteVideo = (id) => {
		dispatch(deleteVideo(id));
		toast.success(`Xoá video thành công`);
	};

	function getEmbedLink(url) {
		var regExp =
			/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
		var match = url.match(regExp);

		if (match && match[2].length === 11) {
			return match[2];
		} else {
			return "error";
		}
	}

	const handleAddVideo = () => {
		const embedLink = `https://www.youtube.com/embed/${getEmbedLink(link)}`;

		dispatch(
			addVideo({
				id: uuidv4(),
				link: embedLink,
			})
		);
		toast.success("Thêm video mới thành công!");
		setLink("");
		linkRef.current.focus();
	};

	return (
		<section className="bg-[#f2f5fc] relative">
			<button
				className="ml-[15px] mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded"
				onClick={() => setIsAdd(!isAdd)}
			>
				Thêm
			</button>
			{isAdd && (
				<div className="max-w-[500px] border-[1px] border-solid border-black p-5 mt-5 ml-4">
					<label htmlFor="text" className="mr-[15px] w-[120px]">
						Link
					</label>
					<input
						type="text"
						id="text"
						className="rounded-lg w-[400px] border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
						value={link}
						onChange={(e) => setLink(e.target.value)}
						ref={linkRef}
					/>
					<button
						className="ml-[15px] mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded"
						onClick={handleAddVideo}
					>
						Thêm
					</button>
				</div>
			)}
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
							onClick={() => handleDeleteVideo(video.id)}
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
