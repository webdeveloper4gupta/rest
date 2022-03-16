// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import Home from './HomeComponent';
// import PropTypes from 'prop-types'
// here i import navbar from reactstrap
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES }  from '../shared/dishes';
// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch,Route,Redirect } from 'react-router-dom';
export class Main extends Component {
  // here i set state 
  constructor(props){
    super(props);

    this.state={
      // it means what i impost from DISHESthat comes in the dishes
      dishes:DISHES,
      // selectedDish:null
    };
  }

//   onDishSelect(dishId){
//     this.setState({selectedDish: dishId});
// }
  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      // inside this we write jsx
    
      <div className="App">
       
        {/* this is way of adding component in the app.js */}
        {/* here i give state as a prop to menucomponent */}
        
        <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect((dishId))}/> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} ></DishDetail> */}
        {/*  switches for wraping more then one rout */}
        <Switch>  
          {/* if in the route we will not want to give any props then in the component we give only name ex shown below */}
          <Route path="/home" component={HomePage}></Route>
          {/* if in the route we want to send props the ex shown below */}
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}></Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main

