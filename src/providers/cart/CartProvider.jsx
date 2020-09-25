import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, subtractItemFromCart, getCartItemsCount } from './cartUtils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: item => {},
	subtractItem: item => {},
	clearItem: () => {},
	cartItemsCount: 0
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);

	const toggleHidden = () => setHidden(!hidden);

	const addItem = item => setCartItems(addItemToCart(cartItems, item));

	const subtractItem = item => setCartItems(subtractItemFromCart(cartItems, item));

	useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider value={{
			hidden,
			toggleHidden,
			cartItems,
			cartItemsCount,
			addItem,
			subtractItem
		}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;