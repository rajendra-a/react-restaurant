import React, { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Row, Col, Label, Button} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length) <= len;
const minLength = (len) =>  (val) => val && (val.length) >= len;

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalCommentOpen: false
        }
    this.toggleModalComment=this.toggleModalComment.bind(this);
    }

    toggleModalComment(){
        this.setState({isModalCommentOpen: !this.state.isModalCommentOpen});
    }

    submitComment=(values)=>{
        this.toggleModalComment();
        alert("The current state is:" + JSON.stringify(values));

    }

    render(){
        return(
            <React.Fragment>
                <Button onClick={this.toggleModalComment}><span className="fa fa-pencil"></span>{" "}Submit Comment</Button>
                <Modal isOpen={this.state.isModalCommentOpen} toggle={this.toggleModalComment}>
                    <ModalHeader toggle={this.toggleModalComment}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value)=> this.submitComment(value)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={4}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={4}>Your name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author" 
                                placeholder="Your Name" 
                                className="form-control"
                                validators={{minLength: minLength(3), maxLength: maxLength(15)}}/>
                                <Errors className="text-danger" model=".author"
                                show="touched"
                                messages={{ minLength: "Must be greater than 3 characters",
                                maxLength: "Must be less than 15 characters"}}/>
                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor=".comment" md={4}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id=".comment" name="comment"
                                placeholder="Comment"
                                className="form-control"
                                validators={{required}}
                                rows="6"/>
                                <Errors className="text-danger" model=".comment"
                                show="touched"
                                messages={{required: "Comment Required"}}/>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="form-group">
                            <Col md={{size:20, offset:5}}>
                                <Button  type="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );

    }
}

function RenderDish({dish}){
    if(dish!=null)
        return(
                <div className="col-6 mt-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>                     
                    </CardBody>
                    </Card>
                </div>
            );
 else return (<div></div>);
}


function RenderComments({comments}){
    if (comments!=null)
    return(
        <div className="col-6 col-md-5 m-3">
    `       <h4>Comments</h4>
            <ul className="list-unstyled">{comments.map((comment, index)=>{
                    return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},{" "}{new Intl.DateTimeFormat("en-US",{year: "numeric", month: "short", day:"2-digit"}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                })}
                
            </ul>
        
        </div>);
else return (<div></div>);
} 

const DishDetail = (props) =>{
    if (props.dish != null)
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active><Link>{props.dish.name}</Link></BreadcrumbItem>
                </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr/>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
         <RenderDish dish={props.dish}/>
         </div>
         <div className="col-12 col-md-5 m-1">
         <RenderComments comments={props.comments}/>
         <CommentForm/>
         <br/>
         <br/>
         </div>
        </div>
        </div>

    );
else return(<div></div>);
}



export default DishDetail;