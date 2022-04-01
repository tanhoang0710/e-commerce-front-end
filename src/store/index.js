import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import itemSlice from "./item-slice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		item: itemSlice,
	},
});

export default store;
