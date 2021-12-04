import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png';
import AppContex from '../context/AppContex';

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContex);
const handleRemove = product=> {
	removeFromCart(product);
};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
