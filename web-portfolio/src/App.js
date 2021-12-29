import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
            <Header></Header>
            <Navbar></Navbar>
            <div id="colorlib-main">
              <Home></Home>
              <Footer></Footer>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
