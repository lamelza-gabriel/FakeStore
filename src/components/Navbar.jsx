import Logo from "../assets/home/navbar/eldon-logo.gif";
import cartLogo from "../assets/home/navbar/cart-icon.svg";
import Menu from "../assets/cart/menu.svg";
import Xmark from "../assets/cart/xmark.svg";
import MenIcon from "../assets/cart/men-icon.svg";
import WomenIcon from "../assets/cart/women-icon.svg";
import JeweleryIcon from "../assets/cart/jewelery-icon.svg";
import TechIcon from "../assets/cart/tech-icon.svg";
import HomeIcon from "../assets/cart/home-icon.svg";

import "../styles/home/navbar/Navbar.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleMenu = () => {
		setOpen(!open);
	};

	const { amount } = useSelector((store) => store.cart);

	return (
		<>
			<nav className='home-nav-mobile'>
				<div
					onClick={() => {
						handleMenu();
					}}
					className='home-nav-mobile-menu'
				>
					<img
						className='menu-mobile-logo'
						src={open ? Xmark : Menu}
						alt='menu logo mobile'
					/>
				</div>
				<div className='home-logo-mobile-container'>
					<NavLink to='/'>
						<img
							src={Logo}
							style={{
								width: "60px",
								textAlign: "center",
								alignItems: "center",
							}}
							alt=''
						/>
					</NavLink>
				</div>
				<div className='home-nav-cart'>
					<NavLink to='/cart' className='home-nav-cart-link'>
						<img className='nav-cart-logo' src={cartLogo} />
					</NavLink>
					<p>{amount}</p>
				</div>
			</nav>
			{open ? (
				<nav className='mobile-nav-display'>
					<div className='mobile-nav'>
						<NavLink to='/'>Home</NavLink>
						<img src={HomeIcon} alt='menu logo mobile' />
					</div>
					<div className='mobile-nav'>
						<NavLink to='/men'>Men</NavLink>
						<img src={MenIcon} alt='menu logo mobile' />
					</div>
					<div className='mobile-nav'>
						<NavLink to='/women'>Women</NavLink>
						<img src={WomenIcon} alt='menu logo mobile' />
					</div>
					<div className='mobile-nav'>
						<NavLink to='/electronics'>Electronics</NavLink>
						<img src={TechIcon} alt='menu logo mobile' />
					</div>
					<div className='mobile-nav'>
						<NavLink to='/jewelery'>Jewelery</NavLink>
						<img src={JeweleryIcon} alt='menu logo mobile' />
					</div>
				</nav>
			) : (
				<></>
			)}
			<div className='home-upper-text'>
				<p> FREE SHIPPING OVER $500 / 12 instalments / FIRST CHANGE FREE! </p>
			</div>
			<nav className='home-nav'>
				<div className='home-nav-logo'>
					<NavLink to='/'>
						<img alt='test' src={Logo} />
					</NavLink>
				</div>
				<div className='home-barnav'>
					<NavLink to='/men' className='home-navlink'>
						Men
					</NavLink>
					<NavLink to='/women' className='home-navlink'>
						Women
					</NavLink>
					<NavLink to='/electronics' className='home-navlink'>
						Electronics
					</NavLink>
					<NavLink to='/jewelery' className='home-navlink'>
						Jewelery
					</NavLink>
				</div>
				<div className='home-nav-cart'>
					<NavLink to='/cart' className='home-nav-cart-link'>
						<img className='nav-cart-logo' src={cartLogo} />
					</NavLink>
					<p>{amount}</p>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
