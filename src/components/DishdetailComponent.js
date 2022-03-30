import React,{ Component } from "react";
// import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem ,Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// import { baseUrl } from '../shared/baseUrl';
// this i will add in the thunk exercise

import { Loading } from './LoadingComponent';



// import { Loading } from './LoadingComponent';

import { Control, LocalForm, Errors } from 'react-redux-form';
// import {Link} from 'react-router-dom';

// constructor(props) {
//     super(props);
//     this.state={
//         selectedDish:this.props.details
//     }
// }
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


export class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
// before redux action
// this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div>
                <Button color="secondary" outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="author">Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors className="text-danger" model=".author" show="touched" 
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6" 
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1 mt-5">
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    {/* i make the changes in the fetch api */}
                    {/* <CardImg top src={baseUrl + dish.image} alt={dish.name} /> */}
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
function RenderCmt({ Comments, postComment, dishId,addComment }) {
    if (Comments == null) {
        return (<div></div>);
    }
    // map is used to iterate te comment array 
    const cmnts = Comments.map((comment) => {
        return (
            <>
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
            
         </>
        );
    });

    return (
        <div className='col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
            <CommentForm dishId={dishId} postComment={postComment} addComment={addComment}/>
        </div>
    )
}


// here i introduce the modal for button below comment




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
//    else  if (props.isLoading) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.errMess) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <h4>{props.errMess}</h4>
//                 </div>
//             </div>
//         );
//     }

    // const dishItem= this.renderDish(dish);
    // const dishCmt= this.renderCmt(dish.comments);
// if diah is not empty it means there is some id

// here i add the loading spinner and if the error it shouuld return error


else if (props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.errMess) {
    return(
        <div className="container">
            <div className="row">            
                <h4>{props.errMess}</h4>
            </div>
        </div>
    );
}

    else if (dish !== null) {
        return (
            <div className="container ">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row ">
                
                        <RenderDish dish={dish} />
                        <RenderCmt Comments={props.comments} postComment={props.postComment}
                        dishId={props.dish.id} addComment={props.addComment}
                      /> 
                        
                </div>



               
            </div>


        );
    }

}

export default DishDetail;