import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "videos",
	initialState: {
		videos: [],
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.videos = action.payload;
			})
			.addCase(addVideo.fulfilled, (state, action) => {
				state.videos.push(action.payload);
			})
			.addCase(deleteVideo.fulfilled, (state, action) => {
				state.videos = state.videos.filter(
					(item) => item.id !== action.payload.id
				);
			});
	},
});

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
	const res = await fetch(
		"https://62d7a64b49c87ff2af39cb02.mockapi.io/videos"
	);
	const data = await res.json();
	return data;
});

export const addVideo = createAsyncThunk(
	"videos/addVideo",
	async (newVideo) => {
		const res = await fetch(
			"https://62d7a64b49c87ff2af39cb02.mockapi.io/videos",
			{
				headers: {
					"Access-Control-Allow-Origin": true,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(newVideo),
			}
		);

		const data = res.json();
		return data;
	}
);

export const deleteVideo = createAsyncThunk(
	"videos/deleteVideo",
	async (id) => {
		const res = await fetch(
			`https://62d7a64b49c87ff2af39cb02.mockapi.io/videos/${id}`,
			{
				headers: {
					"Access-Control-Allow-Origin": true,
					"Content-Type": "application/json",
				},
				method: "DELETE",
			}
		);

		const data = res.json();
		return data;
	}
);

export default videoSlice;
