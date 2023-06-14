import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualItem } from "../features/items/itemsSlice";

import { addItem } from "../features/cart/cartSlice";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/dinamics/IndividualItem.css";
import Loader from "../assets/Loader";

const IndividualItem = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIndividualItem(id));
	}, []);

	const { individualItem, isLoading } = useSelector((store) => store.items);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addItem(individualItem));
	};

	if (isLoading) {
		return (
			<>
				<Navbar />
				<Loader className='loader-global' />;
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main>
				<div className='individual-item-container'>
					<div className='indiviual-item-img-container'>
						<img
							className='individual-item-image'
							src={individualItem.image}
							alt={individualItem.title}
						/>
					</div>
					<div className='individual-item-info'>
						<h4 className='individual-item-info-title'>
							{individualItem.title}
						</h4>
						<div className='individual-item-info-p-container'>
							<p className='individual-item-info-p'>
								{individualItem.description}
							</p>
							<p className='individual-item-info-p price'>${individualItem.price}</p>
						</div>
						<form className='item-form' action='' onSubmit={handleSubmit}>
							<div className='size-option-container'>
								<div className='size-option'>
									<label htmlFor=''>
										Size
										<select name='' id=''>
											<option value='S'>S</option>
											<option value='S'>M</option>
											<option value='S'>L</option>
											<option value='S'>XL</option>
											<option value='S'>XXL</option>
										</select>
									</label>
									<label htmlFor=''>
										Color
										<select name='' id=''>
											<option value='S'>Black</option>
											<option value='S'>White</option>
											<option value='S'>Red</option>
											<option value='S'>Blue</option>
										</select>
									</label>
								</div>
							</div>
							<button type='submit' className='individual-item-btn'>
								Add to the cart
							</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default IndividualItem;
