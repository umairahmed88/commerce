import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {    
        CollectionItemContainer, 
        CollectionFooterContiner, 
        ImageContainer, 
        NameContainer, 
        PriceContainer, 
        AddButton } from './collection-item.styles'

const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl } = item;
    
    return (
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl= {imageUrl} />
            <CollectionFooterContiner>
                <NameContainer > {name}</NameContainer>
                <PriceContainer >{price}</PriceContainer>
            </CollectionFooterContiner>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to Cart
            </AddButton>
    </CollectionItemContainer>
    );
};

const mapDispatchToProps =  dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);