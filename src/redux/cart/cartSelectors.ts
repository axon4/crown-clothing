import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectCart = (state:RootState) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems	
);

export const selectItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((cumulativeQuantity:number, cartItems:any) => 
	cumulativeQuantity + cartItems.quantity, 0)
);