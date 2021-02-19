import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, subTractItemFromCart, reMoveItemFromCart, getCartItemsCount, getCartTotal } from './cartUtilities';

export const CartConText = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: item => {},
	subTractItem: item => {},
	reMoveItem: item => {},
	cartItemsCount: 0,
	cartTotal: 0
});

const CartProvider = ({ children }) => {
	const [ hidden, setHidden ] = useState(true);
	const [ cartItems, setCartItems ] = useState([]);
	const [ cartItemsCount, setCartItemsCount ] = useState(0);
	const [ cartTotal, setCartTotal ] = useState(0);

	const toggleHidden = () => setHidden(!hidden);

	const addItem = item => setCartItems(addItemToCart(cartItems, item));

	const subTractItem = item => setCartItems(subTractItemFromCart(cartItems, item));

	const reMoveItem = item => setCartItems(reMoveItemFromCart(cartItems, item));

	useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));
		setCartTotal(getCartTotal(cartItems));
	}, [cartItems]);

	return (
		<CartConText.Provider 
			value={{
				hidden,
				toggleHidden,
				cartItems,
				cartItemsCount,
				addItem,
				subTractItem,
				reMoveItem,
				cartTotal
			}}
		>
			{children}
		</CartConText.Provider>
	);
};

export default CartProvider;