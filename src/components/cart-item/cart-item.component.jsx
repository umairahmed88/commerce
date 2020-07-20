import React from 'react';

import { 
    CartItemContainer,
    ItemDetailsContainer,
    NameContainer,
    CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageurl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageurl} alt='item'/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;