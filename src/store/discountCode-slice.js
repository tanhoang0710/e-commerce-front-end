import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const discountCodeSlice = createSlice({
	name: "discountCodes",
	initialState: { discountCodes: [], discountCode: {} },
	extraReducers: (builder) => {
		builder
			.addCase(fetchDiscountCodes.fulfilled, (state, action) => {
				state.discountCodes = action.payload;
			})
			.addCase(fetchOneDiscountCode.fulfilled, (state, action) => {
				state.discountCode = action.payload;
			})
			.addCase(addNewDiscountCode.fulfilled, (state, action) => {
				state.discountCodes.push(action.payload);
			})
			.addCase(updateDiscountCode.fulfilled, (state, action) => {
				let currentDiscountCode = state.discountCodes.find(
					(discountCode) => discountCode.id === action.payload.id
				);
				currentDiscountCode = action.payload;
				console.log(currentDiscountCode);
			})
			.addCase(deleteDiscountCode.fulfilled, (state, action) => {
				state.discountCodes = state.discountCodes.filter(
					(item) => item.id !== action.payload
				);
			});
	},
});

export const fetchDiscountCodes = createAsyncThunk(
	"discountCodes/fetchDiscountCodes",
	async () => {
		const res = await fetch(
			"http://localhost:6969/e-commerce/api/discountCodes",
			{
				headers: { "Access-Control-Allow-Origin": true },
			}
		);
		const data = await res.json();
		return data;
	}
);

export const fetchOneDiscountCode = createAsyncThunk(
	"discountCodes/fetchOneDiscountCode",
	async (code) => {
		const res = await fetch(
			`http://localhost:6969/e-commerce/api/discountCodes/${code}`,
			{
				headers: { "Access-Control-Allow-Origin": true },
			}
		);
		const data = await res.json();
		return data;
	}
);

export const addNewDiscountCode = createAsyncThunk(
	"discountCodes/addNewDiscountCode",
	async (newDiscountCode) => {
		const res = await fetch(
			"http://localhost:6969/e-commerce/api/discountCodes",
			{
				headers: {
					"Access-Control-Allow-Origin": true,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(newDiscountCode),
			}
		);

		const data = res.json();
		return data;
	}
);

export const updateDiscountCode = createAsyncThunk(
	"discountCodes/updateDiscountCode",
	async (newDiscountCode) => {
		const res = await fetch(
			`http://localhost:6969/e-commerce/api/discountCodes/${newDiscountCode.id}`,
			{
				headers: {
					"Access-Control-Allow-Origin": true,
					"Content-Type": "application/json",
				},
				method: "PUT",
				body: JSON.stringify(newDiscountCode),
			}
		);

		const data = res.json();
		return data;
	}
);

export const deleteDiscountCode = createAsyncThunk(
	"discountCodes/deleteDiscountCode",
	async (id) => {
		const res = await fetch(
			`http://localhost:6969/e-commerce/api/discountCodes/${id}`,
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

export default discountCodeSlice;
