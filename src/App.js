import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'
import {auth} from './firebase/firebase.utils';
import './App.css';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  // callback inside we're going to call this.setstate where we're
// setting current user to that user object so let's log it out as well.
// Just to see what it looks like now when we go back to our application and we open up our console we
// actually see that this is our user the one that we just signed in with with Google.
    componentDidMount (){
      auth.onAuthStateChanged(user =>{
        this.setState ({currentUser: user});   
        console.log(user);

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  // So right now if we look at the final application we actually see that there's a sign up button in the
// header when a user is signed in so let's implement that the first thing we have to do is make sure that
// our header is aware of when a user is signed in or signed out by giving it the app its current user
// state.
  render(){
    return (
      <div>
      <Header currentUser= {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
  }

export default App;