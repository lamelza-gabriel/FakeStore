import Navbar from "../Navbar";
import DinamicStore from "../DinamicStore";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getJewelery } from "../../features/items/itemsSlice";
import Footer from "../Footer";

const Jewelery = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getJewelery());
	}, []);

	const { jewelery } = useSelector((store) => store.items);

	return (
		<>
			<Navbar />
			<main className='subpages-main'>
				<h2 style={{ textAlign: "center" }}>Latest Jewelery Products</h2>
				<DinamicStore products={jewelery} />
			</main>
			<Footer />
		</>
	);
};

export default Jewelery;
