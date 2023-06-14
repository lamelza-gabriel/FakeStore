import "./App.css";

import { useDispatch, useSelector } from "react-redux";

//import { useEffect } from "react";
//import { getMen } from "./features/items/itemsSlice";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";

function Home() {
	const data = fetch("https://fakestoreapi.com/products").then((res) =>
		res.json()
	);
	//.then((json) => console.log(json));

	//console.log(data);

	const dispatch = useDispatch();

	const { categories, isLoading, men } = useSelector((store) => store.items);
	/*
	console.log(men);
	console.log(categories);
	console.log(isLoading);
*/
	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	);
}

export default Home;
