import React, {Component} from 'react';

import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src = {dish.image} alt = {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className = "col-12 col-md-5 m-1">
                    <Card onClick = {()=> this.onDishSelect(dish)}>
                        <CardImg width  = "100%" src = {dish.image} alt = {dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className = "container">
                <div className = "row">
                    {menu}
                </div>
                <div className = "row">
                    <div className="col-Я col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;

/*import {Media} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className = "col-12 mt-5">
                    <Media tag = "li">
                        <Media left middle>
                            <Media object src = {dish.image} alt = {dish.name}/>
                        </Media>
                        <Media body className = "ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className = "container">
                <div className = "row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}
export default Menu;

*/