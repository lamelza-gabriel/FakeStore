import React from "react";
import DinamicItem from "./DinamicItem";

import "../styles/dinamics/DinamicStore.css";
import { useSelector } from "react-redux";

import Loader from "../assets/Loader";
import { NavLink } from "react-router-dom";

const DinamicStore = ({ products }) => {
	const { isLoading } = useSelector((store) => store.items);

	if (isLoading) {
		return <Loader className='loader-global' />;
	}

	return (
		<>
			<h4 className='dinamic-title'>Products</h4>

			<section className='dinamic-store'>
				{products.map((product) => {
					return <DinamicItem key={product.id} item={product} />;
				})}
			</section>
			<NavLink
				to='/'
				style={{
					color: "black",
					textDecoration: "none",
					margin: "50px",
					display: "flex",
					width: "100px",
					justifyContent: "space-around",
					borderBottom: "1px solid gray",
				}}
			>
				<p>Go Back</p>
				<svg
					style={{ width: "20px" }}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'
				>
					<path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
				</svg>
			</NavLink>
		</>
	);
};

export default DinamicStore;
