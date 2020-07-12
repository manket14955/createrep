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
    e.preventDefault();
    console.log('reached handle submit')
    // should be taken to sign-in page after register  //window.location.href in react
    // const login=(email,password)=>{ return {type :'LOGIN'}}
    // useDispatch(login(this.state.email, this.state.password))
    this.props.history.push({pathname :'/sign-in', detail : {
      email: this.state.email,
      password: this.state.password
    }})

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
          
        {/* it should have fields like first name, last name, email, password, checkbox for terms and conditions, submit button */}
        <label>First Name
        <input type="text" id = 'fname' onChange={this.handleChange}></input></label><br/>
        <label>Last Name
        <input type="textarea" id = 'lname' onChange={this.handleChange}></input></label><br/>
        <label>Email
        <input type="email" id = 'email' onChange={this.handleChange}></input></label><br/>
        <label>Password
        <input type="password" id = 'password' onChange={this.handleChange}></input></label><br/>
        <label>Terms and conditions
        <input type="checkbox" id = 'hasAgreed' onChange={this.handleChange}></input></label><br/>
         <input disabled={!isEnabled} type="submit" ></input>
        </form> 

        </div>
    )
  }
}

export default SignUpForm;