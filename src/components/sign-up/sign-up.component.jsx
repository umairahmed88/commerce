import React, { useState } from 'react';
import { connect } from 'react-redux';

import FromInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = this.state;

    const handleSubmit = async event => {
        event.preventDefault(); 

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(
        //         email, 
        //         password
        //     );

        //     await createUserProfileDocument(user, { displayName });

            // this.setState({
            //     displayName: '',
            //     email: '',
            //     password: '',
            //     confirmPassword: ''
            // });

        //} catch (error) {
    //         console.error(error);
    //     }
        signUpStart({ displayName, email, password })
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    };

        return(
            <SignUpContainer>
                <SignUpTitle>I am new here</SignUpTitle>
                <span>Sign Up With Your Email And Password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FromInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FromInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='email'
                        required
                    />
                    <FromInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='password'
                        required
                    />
                    <FromInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials =>  dispatch(signUpStart(userCredentials))
})

export default connect(mapDispatchToProps)(SignUp);