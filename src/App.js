import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';

import HomePage from './components/pages/homepage/homepage.component';
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './components/pages/checkout/checkout.component';
import ShopPage from './components/pages/shop/shop.component';

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    // <GlobalStyle />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
            currentUser ? 
              <Redirect to='/' /> : <SignInAndSignUpPage />
          }
          />
          </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatchEvent(checkUserSession())
//   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);