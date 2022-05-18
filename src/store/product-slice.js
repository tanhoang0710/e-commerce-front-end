import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "products",
	initialState: { products: [] },
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsByType.fulfilled, (state, action) => {
				state.products = action.payload;
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				let currentProduct = state.products.find(
					(discountCode) => discountCode.id === action.payload.id
				);
				currentProduct = action.payload;
				console.log(currentProduct);
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(
					(item) => item.id !== action.payload
				);
			});
	},
});

export const fetchProductsByType = createAsyncThunk(
	"videos/fetchVideos",
	async (type) => {
		const res = await fetch(
			`http://localhost:6969/e-commerce/api/products?type=${type}`,
			{
				headers: { "Access-Control-Allow-Origin": true },
			}
		);
		const data = await res.json();
		return data;
	}
);

export const updateProduct = createAsyncThunk(
	"videos/updateVideo",
	async (newProduct) => {
		const res = await fetch(
			`http://localhost:6969/e-commerce/api/products/${newProduct.id}`,
			{
				headers: {
					"Access-Control-Allow-Origin": true,
					"Content-Type": "application/json",
				},
				method: "PUT",
				body: JSON.stringify(newProduct),
			}
		);

		const data = res.json();
		return data;
	}
);

export const deleteProduct = createAsyncThunk(
	"videos/deleteVideo",
	async (id) => {
		const res = await fetch(
			`http://localhost:6969/e-commerce/api/products/${id}`,
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

export default productSlice;
