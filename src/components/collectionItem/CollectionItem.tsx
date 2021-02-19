import React, { useContext } from 'react';
import { CartConText } from '../../providers/cart/CartProvider';
import CustomButton from '../../components/customButton/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({ item }: {item: any}) => {
	const { addItem } = useContext(CartConText);

	const { name, price, imageURL } = item;

	return (
		<div className='collection-item'>
			<div style={{backgroundImage: `url(${imageURL})`}} className='image'></div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => {addItem(item)}} inverted>Add-to-Cart</CustomButton>
		</div>
	);
};

export default CollectionItem;