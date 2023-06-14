import Navbar from "../Navbar";
import DinamicStore from "../DinamicStore";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getWomen } from "../../features/items/itemsSlice";
import Footer from "../Footer";

const WomenClothes = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWomen());
	}, []);

	const { women } = useSelector((store) => store.items);

	return (
		<>
			<Navbar />
			<main className='subpages-main'>
				<h2 style={{ textAlign: "center" }}>Latest Women Products</h2>
				<DinamicStore products={women} />
			</main>
			<Footer />
		</>
	);
};

export default WomenClothes;
