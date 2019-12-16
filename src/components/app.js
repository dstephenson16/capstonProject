import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Home from './homepage/home';
import Rsvp from './rsvp/rsvp';
import Auth from './login/auth';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedInStatus: false
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: true
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: false
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: false
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        <Footer />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/rsvp" component={Rsvp} />

            <Route 
            key="auth" 
            path="/auth" 
            render={props => (
              <Auth 
              {...props}
              handleSuccessfulLogin = {this.handleSuccessfulLogin}
              handleUnsuccessfulLogin = {this.handleUnsuccessfulLogin}
              />
            )}
            />

          </Switch>
        </Router>
      </div>
    );
  }
}
