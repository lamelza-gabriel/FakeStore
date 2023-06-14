import Navbar from "../Navbar";
import DinamicStore from "../DinamicStore";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getMen } from "../../features/items/itemsSlice";
import Footer from "../Footer";

const MenClothes = () => {
	const urlMen = "https://fakestoreapi.com/products/category/men's%20clothing";

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMen());
	}, []);

	const { men } = useSelector((store) => store.items);

	return (
		<>
			<Navbar />
			<main className='subpages-main'>
				<h2 style={{ textAlign: "center", margin: "30px" }}>
					Latest Men Products
				</h2>
				<DinamicStore products={men} />
			</main>
			<Footer />
		</>
	);
};

export default MenClothes;
