import React, { Component } from 'react';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Home from './homepage/home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Footer />
        <Home />
      </div>
    );
  }
}
