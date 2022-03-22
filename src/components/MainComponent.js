// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';//if thr is class baseed componet then i used component here 
import Home from './HomeComponent';
// import PropTypes from 'prop-types'
// here i import navbar from reactstrap
// import { Navbar, NavbarBrand } from 'reactstrap';
import Contact from './ContactComponent';
import Menu from './MenuComponent';

// this is discarded in the redux exercise

// import { DISHES }  from '../shared/dishes';
// import { PROMOTIONS }  from '../shared/promotion';
// import { LEADERS }  from '../shared/leaders';
// import { COMMENTS }  from '../shared/comment';



import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch,Route,Redirect, withRouter  } from 'react-router-dom';
//it shows i implkent react router dom
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


export class Main extends Component {
  // here i set state 
  constructor(props){
    super(props);

// during the redux i move all the state to the reducer

    // this.props={
    //   // it means what i impost from DISHESthat comes in the dishes
    //   dishes:DISHES,
    //   comments:COMMENTS,
    //   leaders:LEADERS,
    //   promotions:PROMOTIONS
    //   // selectedDish:null
    // };


  }
  
//   onDishSelect(dishId){
//     this.setState({selectedDish: dishId});
// }

  render() {
    const HomePage = () => {
      return(
          // <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}//[0]means only first element of array
          // promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          // leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          // />
          // now after react redux


          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}//[0]means only first element of array
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          // <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            // comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />

// after tthe react redux

            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return (
      // inside this we write jsx
    
      <div className="App">
       
        {/* this is way of adding component in the app.js */}
        {/* here i give state as a prop to menucomponent */}
        
        <Header/>
        {/* <Menu dishes={this.props.dishes} onClick={(dishId)=>this.onDishSelect((dishId))}/> */}
        {/* <DishDetail dish={this.props.dishes.filter((dish)=> dish.id===this.props.selectedDish)[0]} ></DishDetail> */}
        {/*  switches for wraping more then one rout */}
        <Switch>  
          {/* if in the route we will not want to give any props then in the component we give only name ex shown below */}
          <Route path="/home" component={HomePage}></Route>
          {/* if in the route we want to send props the ex shown below */}


          {/* <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}></Route> */}
              
              {/* after the react redux */}

              <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}></Route>


          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact}></Route>


          {/* <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>}></Route> */}

          {/* after the react redux */}

          <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>}></Route>


          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

// export default Main

// now after the redux

export default withRouter(connect(mapStateToProps)(Main));

