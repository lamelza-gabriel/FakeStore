import Navbar from "../Navbar";
import DinamicStore from "../DinamicStore";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getElectronics } from "../../features/items/itemsSlice";
import Footer from "../Footer";

const Electronics = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getElectronics());
	}, []);

	const { electronics } = useSelector((store) => store.items);

	return (
		<>
			<Navbar />
			<main className='subpages-main'>
				<h2 style={{ textAlign: "center" }}>Latest Electronics Products</h2>
				<DinamicStore products={electronics} />
			</main>
			<Footer />
		</>
	);
};

export default Electronics;
