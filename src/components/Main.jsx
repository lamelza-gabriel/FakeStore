import mainPhoto from "../assets/home/main/background.jpg";
import "../styles/main/Main.css";
import Logo from "../assets/home/navbar/eldon-logo.gif";

import { Link } from "react-router-dom";

import Electronics from "../assets/home/main/electronics.jpg";
import Jewelry from "../assets/home/main/jewelry.jpg";
import Jewelry2 from "../assets/home/main/jewelry2.jpg";
import MenC from "../assets/home/main/men-clothes.jpg";
import WomenC from "../assets/home/main/women-clothes.jpg";
import LatestProducts from "./LatestProducts";

const Main = () => {
	return (
		<main>
			<div className='home-main-photo'>
				<img className='home-background' src={mainPhoto} />
			</div>
			<div className='main-text-container'>
				<div className='img-logo-container'>
					<img className='main-logo' src={Logo} />
				</div>
				<h3 className='main-text'>clothes and accessories for modern people</h3>
			</div>
			<div className='categories-container'>
				<div className='category-img-container one'>
					<h4 className='category-text one-text'>Electronics</h4>
					<Link to='/electronics'>
						<img className='category-img' src={Electronics} />
					</Link>
				</div>
				<div className='category-img-container two'>
					<h4 className='category-text two-text'>Men Clothes</h4>
					<Link to='men'>
						<img className='category-img' src={MenC} />
					</Link>
				</div>
				<div className='category-img-container three'>
					<h4 className='category-text three-text'>Women Clothes</h4>
					<Link to='/women'>
						<img className='category-img' src={WomenC} />
					</Link>
				</div>
				<div className='category-img-container four'>
					<h4 className='category-text four-text'>Jewelery</h4>
					<Link to='jewelery'>
						<img className='category-img' src={Jewelry2} />
					</Link>
				</div>
			</div>
			<div className='categories-container-mobile'>
				<div className='solo-category-container'>
					<h4 className='category-text one-text'>Electronics</h4>
					<div className='category-img-container one'>
						<Link to='/electronics'>
							<img className='category-img' src={Electronics} />
						</Link>
					</div>
				</div>
				<div className='solo-category-container'>
					<h4 className='category-text two-text'>Men Clothes</h4>
					<div className='category-img-container two'>
						<Link to='men'>
							<img className='category-img' src={MenC} />
						</Link>
					</div>
				</div>
				<div className='solo-category-container'>
					<h4 className='category-text three-text'>Women Clothes</h4>
					<div className='category-img-container three'>
						<Link to='/women'>
							<img className='category-img' src={WomenC} />
						</Link>
					</div>
				</div>
				<div className='solo-category-container'>
					<h4 className='category-text four-text'>Jewelery</h4>
					<div className='category-img-container four'>
						<Link to='jewelery'>
							<img className='category-img' src={Jewelry2} />
						</Link>
					</div>
				</div>
			</div>
			<section className='main-news-section'>
				<div className='main-line-section'></div>
				<div className='main-news-text-container'>
					<h3 className='main-news-text'>OUR latest products</h3>
					<LatestProducts />
				</div>
			</section>
		</main>
	);
};

export default Main;
