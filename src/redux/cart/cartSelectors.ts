import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectCart = (state: RootState) => state.cart;

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export type Hidden = ReturnType<typeof selectCartHidden>;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export type CartItems = ReturnType<typeof selectCartItems>;

export const selectItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((cumulativeQuantity: number, cartItems: any) => cumulativeQuantity + cartItems.quantity, 0)
);

export type ItemsCount = ReturnType<typeof selectCartItems>;

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((cumulativeQuantity: number, cartItems: any) => cumulativeQuantity + (cartItems.quantity * cartItems.price), 0)
);

export type CartTotal = ReturnType<typeof selectCartTotal>;