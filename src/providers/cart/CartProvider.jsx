import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, subtractItemFromCart, removeItemFromCart, getCartItemsCount, getCartTotal } from './cartUtils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: item => {},
	subtractItem: item => {},
	removeItem: item => {},
	cartItemsCount: 0,
	cartTotal: 0
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const toggleHidden = () => setHidden(!hidden);

	const addItem = item => setCartItems(addItemToCart(cartItems, item));

	const subtractItem = item => setCartItems(subtractItemFromCart(cartItems, item));

	const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));

	useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));
		setCartTotal(getCartTotal(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider value={{
			hidden,
			toggleHidden,
			cartItems,
			cartItemsCount,
			addItem,
			subtractItem,
			removeItem,
			cartTotal
		}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;