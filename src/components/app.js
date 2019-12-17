import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Home from './homepage/home';
import RsvpAdmin from './rsvp/rsvp-admin';
import RsvpForm from './rsvp/rsvp-form';
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

  authorizedPages() {
    return [
      <Route 
      key="rsvp-admin"
      path="/rsvp-admin"
      component={RsvpAdmin} />
    ]
  }

  componentDidMount() {
    this.authorizedPages();
  }

  render() {
    return (
      <div className='app'>
        <Navbar 
          loggedInStatus = {this.state.loggedInStatus}
        />
        <Footer />

            {this.state.loggedInStatus === true ? this.authorizedPages() : null }

            <Route
              key="home" 
              exact path="/"
              render={props => (
                <Home
                {...props}
                />
            )}
            />

            <Route 
              key="rsvp-form"
              path="/rsvp-form"
              render={props => (
                <RsvpForm
                {...props}
                />
            )} 
            />

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
      </div>
    );
  }
}
