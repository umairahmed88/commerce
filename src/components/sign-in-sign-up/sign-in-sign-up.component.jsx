import React from 'react';

import { SignInAndSignUpContainer } from './sign-in-sign-up.styles';

import SignUp from '../sign-up/sign-up.component';

import SignIn from '../sign-in/sign-in.component';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;