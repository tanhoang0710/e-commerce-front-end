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
					(product) => product.id === action.payload.id
				);
				state.products[currentProduct.id] = action.payload;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(
					(item) => item.id !== action.payload.id
				);
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				state.products.push(action.payload);
			});
	},
});

export const fetchProductsByType = createAsyncThunk(
	"products/fetchProductsByType",
	async (type) => {
		const res = await fetch(
			`https://62d7a64b49c87ff2af39cb02.mockapi.io/products?categoryName=${type}`,
			{
				headers: { "Access-Control-Allow-Origin": true },
			}
		);
		const data = await res.json();
		return data;
	}
);

export const updateProduct = createAsyncThunk(
	"products/updateProduct",
	async (newProduct) => {
		const res = await fetch(
			`https://62d7a64b49c87ff2af39cb02.mockapi.io/products/${newProduct.id}`,
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
	"products/deleteProduct",
	async (id) => {
		const res = await fetch(
			`https://62d7a64b49c87ff2af39cb02.mockapi.io/products/${id}`,
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

export const addProduct = createAsyncThunk(
	"products/addProduct",
	async (newProduct) => {
		const res = await fetch(
			"https://62d7a64b49c87ff2af39cb02.mockapi.io/products",
			{
				headers: {
					"Access-Control-Allow-Origin": true,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(newProduct),
			}
		);

		const data = res.json();
		return data;
	}
);

export default productSlice;
