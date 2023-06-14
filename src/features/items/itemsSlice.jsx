import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//URLS
const url = "https://fakestoreapi.com/products/categories";
const urlLatest = "https://fakestoreapi.com/products?limit=5";
const urlMen = "https://fakestoreapi.com/products/category/men's%20clothing";
const urlWomen =
	"https://fakestoreapi.com/products/category/women's%20clothing";
const urlJewelery = "https://fakestoreapi.com/products/category/jewelery";
const urlElectronics = "https://fakestoreapi.com/products/category/electronics";

//GET DATA

export const getCategories = createAsyncThunk("items/getCategories", () => {
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

export const getLatest = createAsyncThunk("items/getLatest", () => {
	return fetch(urlLatest)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

export const getMen = createAsyncThunk("items/getMen", () => {
	return fetch(urlMen)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

export const getWomen = createAsyncThunk("items/getWomen", () => {
	return fetch(urlWomen)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

export const getElectronics = createAsyncThunk("items/getElectronics", () => {
	return fetch(urlElectronics)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

export const getJewelery = createAsyncThunk("items/getJewelery", () => {
	return fetch(urlJewelery)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

export const getIndividualItem = createAsyncThunk(
	"items/getIndividualItem",
	(id) => {
		return fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.catch((err) => console.log(err));
	}
);

//INITIAL STATE
const initialState = {
	categories: ["electronics", "jewelery", "men's clothing", "women's clothing"],
	isLoading: false,
	products: [],
	men: [],
	women: [],
	electronics: [],
	jewelery: [],
	individualItem: [],
};

//SLICE
const itemsSlice = createSlice({
	name: "itemsCategories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCategories.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(getCategories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.categories = action.payload;
			})
			.addCase(getCategories.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(getLatest.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(getLatest.fulfilled, (state, action) => {
				state.isLoading = false;

				state.products = action.payload;
			})
			.addCase(getLatest.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(getMen.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(getMen.fulfilled, (state, action) => {
				state.isLoading = false;

				let testAmount = action.payload.map((element) => {
					let returnObj = {
						title: element.title,
						price: element.price,
						image: element.image,
						description: element.description,
						amount: 1,
						id: element.id,
					};
					return returnObj;
				});

				//state.men = action.payload;
				state.men = testAmount;
			})
			.addCase(getMen.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(getWomen.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(getWomen.fulfilled, (state, action) => {
				state.isLoading = false;
				let testAmount = action.payload.map((element) => {
					let returnObj = {
						title: element.title,
						price: element.price,
						image: element.image,
						description: element.description,
						amount: 1,
						id: element.id,
					};
					return returnObj;
				});

				//state.men = action.payload;
				state.women = testAmount;
			})
			.addCase(getWomen.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(getElectronics.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(getElectronics.fulfilled, (state, action) => {
				state.isLoading = false;
				let testAmount = action.payload.map((element) => {
					let returnObj = {
						title: element.title,
						price: element.price,
						image: element.image,
						description: element.description,
						amount: 1,
						id: element.id,
					};
					return returnObj;
				});

				//state.men = action.payload;
				state.electronics = testAmount;
			})
			.addCase(getElectronics.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(getJewelery.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(getJewelery.fulfilled, (state, action) => {
				state.isLoading = false;
				let testAmount = action.payload.map((element) => {
					let returnObj = {
						title: element.title,
						price: element.price,
						image: element.image,
						description: element.description,
						amount: 1,
						id: element.id,
					};
					return returnObj;
				});

				//state.men = action.payload;
				state.jewelery = testAmount;
			})
			.addCase(getJewelery.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(getIndividualItem.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getIndividualItem.fulfilled, (state, action) => {
				state.isLoading = false;

				let element = action.payload;

				let testAmount = {
					title: element.title,
					price: element.price,
					image: element.image,
					description: element.description,
					amount: 1,
					id: element.id,
				};

				state.individualItem = testAmount;
			})
			.addCase(getIndividualItem.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export default itemsSlice.reducer;
