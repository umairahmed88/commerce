import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import { 
    CartDropDownContainer, 
    CartItemsContainer, 
    CartDropDownButton 
} from './cart-dropdown.styles';

const CartDropDown = ({ cartItems }) => (
    <CartDropDownContainer>
        <CartItemsContainer>
            {cartItems.map(cartItem => (
            <CartItem  key={cartItem.id} item={cartItem}/>
            ))}
        </CartItemsContainer>
        <CartDropDownButton>GO TO CHECKOUT</CartDropDownButton>
    </CartDropDownContainer>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);