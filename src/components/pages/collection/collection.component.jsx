import React from 'react';
import { } from 'react-redux';

import CollectionItem from '../../collection-item/collection-item.component';

import { selectCollection } from '../../../redux/shop/shop.selectors';

import { CollectionPageContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
    <CollectionPageContainer>
        <h2>CATEGORY PAGE</h2>
    </CollectionPageContainer>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.CollectionId)
})

export default connect(mapStateToProps)(CollectionPage);