import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BikesCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, model) {
    console.log(this.props.bikes)
    console.log('model', model)
    // console.log(this.props.propdata)
    this.props.propdata.history.push({pathname :`/Checkout`
  })
  }

  render() {
    return (
      <div>
        <Card className="Card">
          <CardImg top width="100%" src={this.props.bikes.image} loading='lazy' alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.bikes.name}</CardTitle>
            <CardSubtitle>{this.props.bikes.model}</CardSubtitle>
            <CardText>{this.props.bikes.description}</CardText>
            <Button onClick={this.handleClick(this.props.bikes.model)}>Book</Button>
          </CardBody>
        </Card>   
      </div>
    )
  }

}

export default BikesCard; 