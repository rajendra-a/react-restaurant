import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Label, Col, Button, Row} from "reactstrap";
import { Control, LocalForm, Errors  } from "react-redux-form";

class Contact extends Component{
    constructor(props) {
        super(props);
        

     this.handleSubmit = this.handleSubmit.bind(this);
     

    }

    

    handleSubmit(values){
        console.log("The current state is " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));

    }

    
    render(){
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <p></p>
                    
                    <div className="col-12 col-sm-3 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.547153589916!2d78.43456089393338!3d17.42920985982797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9736ec4570d1%3A0xf379a101b3fe1032!2sTaj%20Deccan!5e0!3m2!1sen!2sin!4v1636286783346!5m2!1sen!2sin"  title="tajdeccan" width="600" height="450"  allowfullscreen="" loading="lazy">Taj De</iframe>
                        </div>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                      <br/>
                   </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>

                            <br/>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                      />
                                </Col>                        
                            </Row>
                            <br/>
                            <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <br/>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <br/>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree"
                                                className="form-check-input" /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                           className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <br/>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-cotrol"/>
                                </Col>
                            </Row>
                            <br/>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
               </div>
            </div>

        );
    }
}


export default Contact;