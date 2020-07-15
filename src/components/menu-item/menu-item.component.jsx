import React from 'react';

import { withRouter } from 'react-router-dom';

import { MenuItemDiv, ContentDiv, BackgroundImageConatiner } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <MenuItemDiv onClick={ () => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageConatiner
                    style={{backgroundImage: `url(${imageUrl})`}}
                    className='background-image'
        />
        <ContentDiv className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
        </ContentDiv>
    </ MenuItemDiv>
);

export default withRouter(MenuItem);