import { NavLink } from "react-router-dom";

const DinamicItem = ({ item }) => {
	return (
		<div className='dinamic-item-container'>
			<NavLink style={{ color: "black" }} to={`/${item.id}`}>
				<img className='dinamic-item-img' src={item.image} alt={item.title} />
				<div className='dinamic-item-text-container'>
					<p className='dinamic-item-text'>{item.title}</p>
					<p className='dinamic-item-price'>${item.price}</p>
				</div>
			</NavLink>
		</div>
	);
};

export default DinamicItem;
