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
import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay,   CardTitle } from 'reactstrap'
import DishDetails from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedDish:null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    render() {

        const menu=this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 mt-5">
                <Card onClick={()=>this.onDishSelect((dish))}>
                      <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle><h5>{dish.name}</h5></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className = 'container'>
                <div className = "row">
                    {menu}
                </div>
                    <DishDetails dish={this.state.selectedDish}/>
            </div>
        );
    }
}
export default Menu;