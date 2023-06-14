import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";

import { store } from "./store.jsx";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Electronics from "./components/electronics/Electronics.jsx";
import MenClothes from "./components/menclothes/MenClothes.jsx";
import WomenClothes from "./components/womenclothes/WomenClothes.jsx";
import Jewelery from "./components/jewelery/Jewelery.jsx";
import Cart from "./components/cart/Cart.jsx";
import Payments from "./components/payments/Payments.jsx";
import IndividualItem from "./components/IndividualItem.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/electronics' element={<Electronics />} />
					<Route path='/men' element={<MenClothes />} />
					<Route path='/women' element={<WomenClothes />} />
					<Route path='/jewelery' element={<Jewelery />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/:id' element={<IndividualItem />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);
