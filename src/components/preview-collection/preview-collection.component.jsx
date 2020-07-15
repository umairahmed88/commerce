import React from 'react';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './preview-collection.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} /> 
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;