import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import React, {Component} from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import 'bootstrap'

class Main extends Component {
  constructor(props){
    super(props);
    this.state= {dishes: DISHES,
    selectedDish: null};
}

onSelectDish(dishID){
    this.setState({selectedDish:dishID})
}
  render(){
  return (
    <div>
      <Navbar color dark className="primary">
        <NavbarBrand href="/">Restaurant</NavbarBrand>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishID)=>this.onSelectDish(dishID)}/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
    </div>
  );
  }
}

export default Main;
