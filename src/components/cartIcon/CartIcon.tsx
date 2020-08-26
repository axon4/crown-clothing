import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ItemsCount } from '../../redux/cart/cartSelectors';
import { selectItemsCount } from '../../redux/cart/cartSelectors';
import './CartIcon.scss';

type CartIconProps = ItemsCount & {
	toggleCartHidden:() => object
};

const CartIcon = ({ toggleCartHidden, itemCount }:CartIconProps) => {
	return (
		<div className='cart-icon-container' onClick={toggleCartHidden} >
			<Icon className='cart-icon' />
			<span id='item-count'>{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, ItemsCount>({
	itemCount: selectItemsCount
});
const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		toggleCartHidden: () => dispatch(toggleCartHidden())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);