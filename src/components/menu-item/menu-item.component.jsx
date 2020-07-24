import React from 'react';

import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer, 
    BackgroundImageConatiner,
    ContentContainer,
    ContentTitle,ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
        size={size} 
        onClick={ () => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageConatiner
                    imageUrl={imageUrl}
                    className='background-image'
        />
        <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </ MenuItemContainer>
);

export default withRouter(MenuItem);