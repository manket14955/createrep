import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Home from './pages/home2';
import Checkout from './pages/Checkout.jsx';
import MyBookings from './pages/MyBookings.jsx';
import './App.css';
import MainArea from './pages/MainArea';
import MyBookings1 from './pages/MyBookings1.jsx'
class App extends Component {
  render() {
    return (
      <Router basename="/bike-rentals/">
        <div className="App">
          
          <div className="App__Form">
            <Switch>
              <Route path="/sign-in" component={SignInForm} ></Route>
              <Route exact strict path="/" component={SignUpForm}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/mainArea" component={MainArea}></Route>
              <Route path="/checkout" component={Checkout}></Route>
              <Route path="/myBookings" component={MyBookings}></Route>
              <Route path="/myBookings1" component={MyBookings1}></Route>
              </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

