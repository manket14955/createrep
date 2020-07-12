import React, { Component } from "react";
import DatePicker from "react-datepicker";
import {Button} from 'reactstrap'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar.jsx';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleClick() {
    this.props.history.push("/mainArea");
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    }, ()=> console.log(this.state.startDate));
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    }, () => console.log(this.state.endDate));
  }

  render() {
    return (
      <div>
        <NavBar />
        <DatePicker onSelect={this.handleChangeStart}>{this.state.startDate}</DatePicker><br/>
        <DatePicker onSelect={this.handleChangeEnd}>{this.state.endDate}</DatePicker><br/>
        <Button onClick={this.handleClick}></Button>
      </div>

    );
  }
}

export default Home;


// should have a NavBar component
// should have a DatePicker component which is used to select the start and end dates
// should have a button for searching the bikes based on the dates entered 