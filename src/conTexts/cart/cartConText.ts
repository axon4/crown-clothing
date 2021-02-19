import { createContext } from 'react';

const CartConText = createContext({
	hidden: true,
	toggleHidden: () => {}
});

export default CartConText;