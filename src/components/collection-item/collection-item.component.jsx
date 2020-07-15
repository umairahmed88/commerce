import React from 'react';

import { CollectionItemContainer, CollectionFooterContiner, ImageContainer } from './collection-item.styles'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <CollectionItemContainer>
        <ImageContainer
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
            <CollectionFooterContiner>
                <span className='name'> {name}</span>
                <span className='price'>{price}</span>
            </CollectionFooterContiner>
    </CollectionItemContainer>
);

export default CollectionItem;