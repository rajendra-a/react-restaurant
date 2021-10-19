import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';
import React, {Component} from 'react';
import Menu from './components/Menu';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {dishes: DISHES}
}
  render(){
  return (
    <div>
      <Navbar color dark className="primary">
        <NavbarBrand href="/">Restaurant</NavbarBrand>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
  }
}

export default App;
