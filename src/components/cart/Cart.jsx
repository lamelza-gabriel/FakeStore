import Footer from "../Footer";
import Navbar from "../Navbar";
import "../../styles/cart/Cart.css";

import Trash from "../../assets/cart/trash.svg";
import ArrowLeft from "../../assets/cart/arrow-left.svg";

import ArrowUp from "../../assets/cart/arrow-up.svg";
import ArrowDown from "../../assets/cart/arrow-down.svg";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
	getTotal,
	increase,
	clearCart,
	decrease,
	removeItem,
} from "../../features/cart/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { cartItems, total, amount } = useSelector((store) => store.cart);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotal());
	}, [cartItems]);

	return (
		<>
			<Navbar />
			<h2 className='cart-main-title'>shopping cart</h2>
			<section className='cart-main-container'>
				<div className='cart-detail-container'>
					{amount == 0 ? (
						<p>
							Your cart is empty, look at our <NavLink to='/'>Store</NavLink>
						</p>
					) : (
						<p></p>
					)}

					{cartItems.map((item) => {
						return (
							<div key={item.id}>
								<div className='cart-product' key={item.id}>
									<div className='cart-product-img-container'>
										<img
											className='cart-product-img'
											src={item.image}
											alt={item.id}
										/>
									</div>
									<table className='cart-product-table'>
										<tbody>
											<tr>
												<th>Product</th>
												<th>Amount</th>
												<th>Price</th>
											</tr>
											<tr>
												<td>{item.title.slice(0, 20)}</td>
												<td>
													<div>{item.amount}</div>
													<div className='btns-cart-arrows-container'>
														<button
															className='btn-cart-arrow'
															onClick={() => {
																if (item.amount === 1) {
																	dispatch(removeItem(item.id));

																	return;
																}

																dispatch(decrease(item.id));
															}}
														>
															<img src={ArrowDown} alt='asd' />
														</button>
														<button
															className='btn-cart-arrow'
															onClick={() => {
																dispatch(increase(item.id));
															}}
														>
															<img src={ArrowUp} alt='asd' />
														</button>
													</div>
												</td>
												<td>$ {item.price}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						);
					})}
				</div>
				<div className='cart-total-container'>
					<div className='cart-text-container'>
						<p className='total-text-title'>PURCHASE SUMMARY</p>
						<p className='total-text'>
							order total:
							{total.toFixed(2)}$
						</p>
					</div>
					<div className='cart-btn-container'>
						<button className='total-btn'>make an order</button>
					</div>
				</div>
			</section>
			<div className='cart-btns-action-container'>
				<div className='cart-test-btn'>
					<NavLink to='/' style={{ textDecoration: "none", color: "black" }}>
						<button className='cart-btn-action'>
							<img className='cart-btn-icon' src={ArrowLeft} alt='arrow left' />
							Continue Shopping
						</button>
					</NavLink>
				</div>
				<div className='cart-test-btn'>
					<button
						className='cart-btn-action'
						onClick={() => {
							dispatch(clearCart());
						}}
					>
						<img className='cart-btn-icon' src={Trash} alt='trash icon' />
						Clear Cart
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
