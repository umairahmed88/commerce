import React from 'react';
import { connect } from 'react-redux';

import { SignInContainer, ButtonContainer, SignInTitle } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const{ emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '', password: ''})
        // } catch (error) {
        //     console.log(error);
        // }

    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };


    render() {
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I am a family member of this group</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(
    null,
    mapDispatchToProps
)(SignIn);