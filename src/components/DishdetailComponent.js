import React, { Component } from "react";
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetails extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedDish:this.props.details
        }
    }

    renderDish(dish){
        if (dish!=null){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h3>{dish.name}</h3></CardTitle>
                        <CardText><b>{dish.description}</b></CardText>
                    </CardBody>
                </Card></div>
            )
            
        }
        else{
            return(
                <div></div>
            );
        }
    }

renderCmt(comments){
    if(comments==null){
        return(<div></div>);
    }
    const cmnts= comments.map(comment=>{
        return(
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        );
    });

    return (
        <div className='col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
        </div>
    )
}

    render() {

        const dish=this.props.dish

        if (dish == null){
            return (
                <div></div>
            );
        }

        const dishItem= this.renderDish(dish);
        const dishCmt= this.renderCmt(dish.comments);

        return(
            <div className="row mt-5">
                {dishItem}
               {dishCmt}
            </div>
        );
    }
}
export default DishDetails;