import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import { GlobalStyle } from './global.styles';
import HomePage from './components/pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)

function App() {
  return (
    // <GlobalStyle />
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
