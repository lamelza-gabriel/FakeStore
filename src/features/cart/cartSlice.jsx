import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	amount: 0,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
		},
		addItem: (state, action) => {
			let datos = JSON.parse(JSON.stringify(state.cartItems));

			let test = datos.find((item) => item.id === action.payload.id);

			if (test) {
				alert("item alredy in your bag");
			} else {
				const newCart = [...state.cartItems, action.payload];

				state.cartItems = newCart;
				state.amount = state.amount + 1;
			}
		},
		increase: (state, action) => {
			const item = state.cartItems.find((item) => item.id === action.payload);
			item.amount = item.amount + 1;
		},
		decrease: (state, action) => {
			const item = state.cartItems.find((item) => item.id === action.payload);
			item.amount = item.amount - 1;
		},
		getTotal: (state) => {
			let cantidad = 0;
			let final = 0;
			state.cartItems.forEach((item) => {
				cantidad += item.amount;
				final += item.amount * item.price;
			});
			state.amount = cantidad;
			state.total = final;
		},
	},
});

export const { clearCart, removeItem, getTotal, addItem, increase, decrease } =
	cartSlice.actions;

export default cartSlice.reducer;
