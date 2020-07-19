import React from 'react';
import { connect} from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                Contact
            </OptionLink>
            {
                 currentUser ?
                 <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                 :
                 <OptionLink to='/signin'>Sign In</OptionLink>
            }
        </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);