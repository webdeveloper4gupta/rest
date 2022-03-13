// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// here i import navbar from reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './components/MenuComponent';
export class App extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      // inside this we write jsx
      <div className="App">
        {/* here i write a Navbar component which import from reactstrap */}
        <Navbar dark color="primary">
        <div className='container'> 
        {/* navbrand also import from reactstrap */}
           <NavbarBrand href="\">Mahajan Restaurant</NavbarBrand>
        </div>
        </Navbar>
        <MenuComponent />
      </div>
    )
  }
}

export default App

