import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Home from './homepage/home';
import Rsvp from './rsvp/rsvp';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Footer />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/rsvp" component={Rsvp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
