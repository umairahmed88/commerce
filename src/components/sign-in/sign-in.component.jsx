import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignInContainer, ButtonContainer, SignInTitle } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
       

        emailSignInStart(email, password);

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '', password: ''})
        // } catch (error) {
        //     console.log(error);
        // }

    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value });
    };

        return(
            <SignInContainer>
                <SignInTitle>I am a family member of this group</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        label='email'
                        name='email' 
                        type='email' 
                        value={email} 
                        handleChange={handleChange} 
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={handleChange} 
                        label='password'
                        required
                    />
                    <ButtonContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton 
                        type='button'
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                    >
                        Sign In With Google
                    </CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        );
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(
    null,
    mapDispatchToProps
)(SignIn);