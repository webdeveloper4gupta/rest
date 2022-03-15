// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// here i import navbar from reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES }  from '../shared/dishes';
import DishDetails from './DishdetailComponent';
export class Main extends Component {
  // here i set state 
  constructor(props){
    super(props);

    this.state={
      // it means what i impost from DISHESthat comes in the dishes
      dishes:DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
}
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
        {/* this is way of adding component in the app.js */}
        {/* here i give state as a prop to menucomponent */}
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect((dishId))}/>
        <DishDetails dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} ></DishDetails>
      </div>
    )
  }
}

export default Main

