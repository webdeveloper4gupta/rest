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
// import { addComment } from '../redux/ActionCreators';
// import { addComment, fetchDishes } from '../redux/ActionCreators';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
// this i will used in redux exercise
const mapStateToProps = state => {//it map all states in the store as the prop of class
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  // this i will addd in the redux-thunk exercise
  // fetchDishes()is a thunk
  fetchDishes: () => { dispatch(fetchDishes())}
});


// i make changes in the fetch api

// const mapDispatchToProps = dispatch => ({
//   addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
//   fetchDishes: () => { dispatch(fetchDishes())},
//   // resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
//   fetchComments: () => dispatch(fetchComments()),
//   fetchPromos: () => dispatch(fetchPromos())
// });



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
  // i introduce this thunk execise
  componentDidMount() {
    this.props.fetchDishes();
  }
  // i change the making in the fetch api
  // componentDidMount() {
  //   this.props.fetchDishes();
  //   this.props.fetchComments();
  //   this.props.fetchPromos();
  // }

//   onDishSelect(dishId){
//     this.setState({selectedDish: dishId});
// }

  render() {
    const HomePage = () => {
      return(
          // <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}//[0]means only first element of array
          // promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          // leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          // />
          // now after react redux


          // <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}//[0]means only first element of array
          // promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          // leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          // />


          // after the thunk
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />

          // after the fetch api
          // <Home 
          //     dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          //     dishesLoading={this.props.dishes.isLoading}
          //     dishErrMess={this.props.dishes.errMess}
          //     promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          //     promoLoading={this.props.promotions.isLoading}
          //     promoErrMess={this.props.promotions.errMess}
          //     leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          // />
      );
    }
    const DishWithId = ({match}) => {
      return(
          // <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            // comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />

// after tthe react redux

            // <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            // comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} addComment={this.props.addComment}/>

            // after the thunk exercise

            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
          />

          // after the fetch api
          
          // <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          //   isLoading={this.props.dishes.isLoading}
          //   errMess={this.props.dishes.errMess}
          //   comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          //   commentsErrMess={this.props.comments.errMess}
          //   addComment={this.props.addComment}
          // />
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


          {/* <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}></Route> */}
              
              {/* after the react redux */}

              <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}></Route>


          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact}></Route>


          {/* <Route path="/aboutus" component={()=><About leaders={this.state.leaders}/>}></Route> */}

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
// here i connect to the store
// export default withRouter(connect(mapStateToProps)(Main));

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

