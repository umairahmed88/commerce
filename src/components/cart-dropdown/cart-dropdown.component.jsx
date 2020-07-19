import React from 'react';

import { CartDropDownContainer, CartItemsContainer, CartDropDownButton } from './cart-dropdown.styles';

const CartDropDown = () => (
    <CartDropDownContainer>
        <CartItemsContainer />
        <CartDropDownButton>GO TO CHECKOUT</CartDropDownButton>
    </CartDropDownContainer>
)

export default CartDropDown;