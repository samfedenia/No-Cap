/* eslint jsx-quotes: "off" */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div id='nav'>
        <NavLink className='nav-link underline' to='/Home'>
          Home
        </NavLink>
        <NavLink className='nav-link underline' to='/Products'>
          Products
        </NavLink>
        <NavLink className='nav-link underline' to='/Contact'>
          Contact Us
        </NavLink>
        <NavLink className='nav-link underline' to='/Login'>
          Log In
        </NavLink>
        <NavLink className='nav-link underline' to='/ShoppingCart'>
          Shopping Cart
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
