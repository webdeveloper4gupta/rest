import React, { Component } from 'react';
// here i import Media compeonet from package called reactstrap
// import { Media } from 'reactstrap';
// now i will used Media instead of Media
import { Card,CardImg,CardImgOverlay ,CardText,CardBody,CardTitle} from 'reactstrap';
export class MenuComponent extends Component {
    constructor(props){
        super(props);
        // here i make state
        this.state = {// here i create one object that will render in the index.html 
           selectedDish:null
            };
    }
    onDishSelect(dish){
             this.setState({selectedDish:dish})
    }
    renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }
  render() {
    //   here i create one javscript variable
    // here dishes comes as props thats why we used tthis .props.dishes
    const menu = this.props.dishes.map((dish) => {
        return (
          // <div key={dish.id} className="col-12 mt-5">
          //   <Media tag="li">
          //     <Media left middle>
          //         <Media object src={dish.image} alt={dish.name} />
          //     </Media>
          //     <Media body className="ml-5">
          //       <Media heading>{dish.name}</Media>
          //       <p>{dish.description}</p>
          //     </Media>
          //   </Media>
          // </div>
          <div  className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
        );
    });
    return (
      <div className='container'>
          <div className="row">
              {/* here i used Media componet that do listing of menu which i import above */}
              {/* Media comes from bootstrap */}
           
                {menu}
            
          </div>
          <div className="row">
                  <div  className="col-12 col-md-10 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
      </div>
    );
  }
}

export default MenuComponent
