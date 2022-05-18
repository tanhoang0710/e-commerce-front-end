import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import discountCodeSlice from "./discountCode-slice";
import itemSlice from "./item-slice";
import productSlice from "./product-slice";
import videoSlice from "./video-slice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		item: itemSlice,
		discountCodes: discountCodeSlice.reducer,
		videos: videoSlice.reducer,
		products: productSlice.reducer,
	},
});

export default store;
