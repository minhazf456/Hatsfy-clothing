import React from 'react';
import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.styles.scss';

// /// and then we want to destructure the current user property that we're passing into our header from our
// app and what we'll do is we'll use a ternary operator to conditionally render either a div if it's true
// or a link if it's false now because of the nature of the ternary operator if current user is an object
// it will evaluate to true therefore it will render a div if it is false such as if it was a null null
// evaluates to false and then it will render the link.

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;