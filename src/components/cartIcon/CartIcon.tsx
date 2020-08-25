import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectItemsCount } from '../../redux/cart/cartSelectors';
import './CartIcon.scss';

type CartIconProps = {
	toggleCartHidden:() => object,
	itemCount:number
};

const CartIcon = ({ toggleCartHidden, itemCount }:CartIconProps) => {
	return (
		<div className='cart-icon-container' onClick={toggleCartHidden} >
			<Icon className='cart-icon' />
			<span id='item-count'>{itemCount}</span>
		</div>
	);
};

const mapStateToProps = (state:RootState) => {
	return {
		itemCount: selectItemsCount(state)
	};
};

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		toggleCartHidden: () => dispatch(toggleCartHidden())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);