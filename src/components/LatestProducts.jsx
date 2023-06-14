import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getLatest } from "../features/items/itemsSlice";
import { NavLink } from "react-router-dom";

const LatestProducts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLatest());
	}, []);

	const { products } = useSelector((store) => store.items);

	console.log(products);

	return (
		<div>
			<div className='test'>
				{products.map((product) => {
					return (
						<div key={product.id} className='latest-products-map-container'>
							<img
								style={{ width: "100px" }}
								className='latest-products-map-unit'
								src={product.image}
								alt={product.title}
							/>
							<div className='latest-products-info-container'>
								<NavLink to={`/${product.id}`} style={{ color: "black" }}>
									{product.title}
								</NavLink>
								<p className='latest-products-map-price'>${product.price}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LatestProducts;
