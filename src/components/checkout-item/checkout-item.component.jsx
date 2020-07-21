import React from 'react';

import { 
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <TextContainer>{quantity}</TextContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
);

export default CheckoutItem;