import React from 'react';

import { MenuItemDiv, ContentDiv, BackgroundImageConatiner } from './menu-item.styles';

const MenuItem = ({ title, imageUrl }) => (
    <MenuItemDiv>
        <BackgroundImageConatiner
                    style={{backgroundImage: `url(${imageUrl})`}}
        />
        <ContentDiv>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
        </ContentDiv>
    </ MenuItemDiv>
)

export default MenuItem;