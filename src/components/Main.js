import Home from './Home';
import React, { Component } from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';




const mapStateToProps = state => {

    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {

    const HomeComponent = () => {
        return (
            <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
            promotion={this.props.promotions.filter((promotion)=> promotion.featured)[0]}
            leader={this.props.leaders.filter((leader)=> leader.featured)[0]}/>

        );
    }

    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
            comments ={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}/>
        );
    }
        
        return ( 
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomeComponent}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}



export default withRouter(connect(mapStateToProps)(Main));