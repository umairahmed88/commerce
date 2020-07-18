import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
);

// const CustomButton = ({ children, isGoogleSignIn ,...otherProps }) => (
//     <CustomButtonContainer className={`${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
//         {children}
//     </CustomButtonContainer>
// );


export default CustomButton;