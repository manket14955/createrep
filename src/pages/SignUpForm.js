import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: '',
      hasAgreed: false,
      isEnabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let iobject = {};
    if (target.type === 'checkbox') {
      iobject['hasAgreed'] = target.checked;
      iobject['isEnabled'] = target.checked;
      console.log(target.checked);
    } else {

      iobject[target.id] = target.value;

    }
    this.setState(iobject);
  }

  handleSubmit(e) {
      
    // should be taken to sign-in page after register
    <ReactRouter.Link to ="/">Sign In</ReactRouter.Link>
    
  
    }
  
  canBeSubmitted() {
    const { email, password, fname, lname, hasAgreed } = this.state;
    return email.length > 0 && password.length > 6 && fname.length > 0 && lname.length && hasAgreed === true;
  };

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div className="FormCenter">

        <div className="FormTitle">
          <NavLink to="/sign-in" className="FormTitle__Link">Login</NavLink> or
          <NavLink exact to="/" className="FormTitle__Link">Register</NavLink>
        </div>

        <form onSubmit={this.handleSubmit} className="FormFields">
          
        //it should have fields like first name, last name, email, password, checkbox for terms and conditions, submit button
        <input type="textarea" onChange={this.handleChange}>First Name</input>
        <input type="textarea" onChange={this.handleChange}>Last Name</input>
        <input type="email" onChange={this.handleChange}>Email</input>
        <input type="password" onChange={this.handleChange}>Password</input>
        <input type="checkbox" onChange={this.handleChange}>Terms and conditions</input>

         
        </form>
      </div>
    );
  }
}

export default SignUpForm;