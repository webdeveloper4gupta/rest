// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// here i import navbar from reactstrap
// import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
// import Menu from './components/MenuComponent';
// import { DISHES }  from './shared/dishes';
export class App extends Component {
  // here i set state 
  // constructor(props){
  //   super(props);

  //   this.state={
  //     // it means what i impost from DISHESthat comes in the dishes
  //     dishes:DISHES
  //   };
  // }

  render() {
    return (
      // inside this we write jsx
      // <div className="App">
      <div>
        {/*
        {/* here i write a Navbar component which import from reactstrap */}
         {/* <Navbar dark color="primary">
        // <div className='container'> 
        // {/* navbrand also import from reactstrap */}
            {/* <NavbarBrand href="\">Mahajan Restaurant</NavbarBrand> */}
         {/* </div> */}
         {/* </Navbar> */} 
         {/* this is way of adding component in the app.js */}
         {/* here i give state as a prop to menucomponent */}
        {/* <Menu dishes={this.state.dishes} /> */}       
          <Main ></Main>
      </div>
    )
  }
}

export default App

