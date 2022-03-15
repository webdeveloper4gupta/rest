import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


// constructor(props) {
//     super(props);
//     this.state={
//         selectedDish:this.props.details
//     }
// }

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1 mt-5">
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h3>{dish.name}</h3></CardTitle>
                        <CardText><b>{dish.description}</b></CardText>
                    </CardBody>
                </Card>
            </div>

        );

    }
    else {
        return (
            <div></div>
        );
    }
}
// function that return comment
function RenderCmt({ Comments }) {
    if (Comments == null) {
        return (<div></div>);
    }
    // map is used to iterate te comment array 
    const cmnts = Comments.comments.map((comment) => {
        return (
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
// this function i will return to the  maincomponent that will display in the dmain component
const DishDetail = (props) => {// we can also write function DishDetail(props)

    // const dish=this.props.dish;
    const dish = props.dish;
    //    if dish
    if (dish === null) {
        return (
            <div></div>
        );
    }


    // const dishItem= this.renderDish(dish);
    // const dishCmt= this.renderCmt(dish.comments);
// if diah is not empty it means there is some id
    else if (dish !== null) {
        return (
            <div className="container ">
                <div className="row ">
                
                        <RenderDish dish={dish} />
                        <RenderCmt Comments={dish}/> 
                </div>



               
            </div>


        );
    }

}

export default DishDetail;