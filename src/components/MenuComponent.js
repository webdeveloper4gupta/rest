// import React, { Component } from 'react';
// // here i import Media compeonet from package called reactstrap
// // import { Media } from 'reactstrap';
// // now i will used Media instead of Media
// // import { Card,CardImg,CardImgOverlay ,CardText,CardBody,CardTitle} from 'reactstrap';
// import { Card,CardImg,CardImgOverlay ,CardTitle} from 'reactstrap';
// import DishdetailComponent  from './DishdetailComponent';
// export class MenuComponent extends Component {
//     constructor(props){
//         super(props);
//         // here i make state
//         this.state = {// here i create one object that will render in the index.html 
//            selectedDish:null
//             };
//             console.log("hello constructor invoked")
//     }
//     // this will mounting lifecycle method
//     componentDidMount(){
//       console.log("componet did mount invoked");
//     }
//     onDishSelect(dish){
//              this.setState({selectedDish:dish});
//     }
//   //   renderDish(dish) {
//   //     if (dish != null)
//   //         return(
//   //             <Card>
//   //                 <CardImg top src={dish.image} alt={dish.name} />
//   //                 <CardBody>
//   //                   <CardTitle>{dish.name}</CardTitle>
//   //                   <CardText>{dish.description}</CardText>
//   //                 </CardBody>
//   //             </Card>
//   //         );
//   //     else
//   //         return(
//   //             <div></div>
//   //         );
//   // }
//   render() {
//     //   here i create one javscript variable
//     // here dishes comes as props thats why we used tthis .props.dishes
//     const menu = this.props.dishes.map((dish) => {
//         return (
         
//           <div key={dish.id} className="col-12 col-md-5 m-1">
//           <Card 
//             onClick={() => this.onDishSelect(dish)}>
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay>
//                 <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//         );
//     });
//     return (
//       <div className='container'>
//           <div className="row">
//               {/* here i used Media componet that do listing of menu which i import above */}
//               {/* Media comes from bootstrap */}
           
//                 { menu }
            
//           </div>
//           {/* <div className="row">
//                   <div  className="col-12 col-md-5 m-1">
//                     {this.renderDish(this.state.selectedDish)}
//                   </div>
//                 </div> */}
//                 <DishdetailComponent dishes={this.state.selectedDish}/>
//       </div>
//     );
//   }
// }

// export default MenuComponent
import React from "react";
import { Card, CardImg, CardImgOverlay,   CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import DishDetails from './DishdetailComponent';

// this i import in the react-thunk exercise
import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';

    // constructor(props) {
    //     super(props);
    //     // this.state={
    //     //     selectedDish:null
    //     // }
    // }

    // onDishSelect(dish){
    //     this.setState({selectedDish: dish});
    // }

        function RenderMenuItem({dish,onclick}){
            return(
                // <Card onClick={()=>onclick(dish.id)}> 
                <Card > 
                  <Link to={`/menu/${dish.id}`} >
                      <CardImg width='100%' src={dish.image} alt={dish.name} />
                      {/* <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} /> */}
                    <CardImgOverlay>
                        <CardTitle><h5>{dish.name}</h5></CardTitle>
                  </CardImgOverlay>
                  </Link>
                </Card>
            );
        }
      const Menu=(props)=>{
        // const menu=props.dishes.map((dish)=>{

// this modification in the thunk exercise
const menu = props.dishes.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 mt-5">
                {/* <Card onClick={()=>this.onDishSelect((dish))}> */}
                {/* <Card onClick={()=>this.props.onclick(dish.id)}>
                      <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle><h5>{dish.name}</h5></CardTitle>
                  </CardImgOverlay>
                </Card> */}
                {/* <RenderMenuItem  dish={dish} onclick={props.onClick}/> */}
                <RenderMenuItem  dish={dish} />
              </div>
            );
        });
        if (props.dishes.isLoading) {
          return(
              <div className="container">
                  <div className="row">            
                      <Loading />
                  </div>
              </div>
          );
      }
      else if (props.dishes.errMess) {
          return(
              <div className="container">
                  <div className="row"> 
                      <div className="col-12">
                          <h4>{props.dishes.errMess}</h4>
                      </div>
                  </div>
              </div>
          );
      }
      else{
        return (
            <div className = 'container'>
              <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className = "row">
                    {menu}
                </div>
                    {/* <DishDetails dish={this.state.selectedDish}/> */}
            </div>
        );
      }
      }
        // const menu=this.props.dishes.map((dish)=>{
        //     return (
        //         <div key={dish.id} className="col-12 col-md-5 m-1 mt-5">
        //         {/* <Card onClick={()=>this.onDishSelect((dish))}> */}
        //         {/* <Card onClick={()=>this.props.onclick(dish.id)}>
        //               <CardImg width='100%' src={dish.image} alt={dish.name} />
        //             <CardImgOverlay>
        //                 <CardTitle><h5>{dish.name}</h5></CardTitle>
        //           </CardImgOverlay>
        //         </Card> */}
        //       </div>
        //     );
        // });

        // return (
        //     <div className = 'container'>
        //         <div className = "row">
        //             {menu}
        //         </div>
        //             {/* <DishDetails dish={this.state.selectedDish}/> */}
        //     </div>
        // );

export default Menu;