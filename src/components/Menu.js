import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import '../shared/dishes';


function RenderMenuItem({ dish, onClick }) {
    return (
        <div className="col-12 col-md-5 m-1" key={dish.id} >
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="25%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <RenderMenuItem dish={dish} onClick={props.onClick} />
        );
    });


    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );

}



export default Menu;