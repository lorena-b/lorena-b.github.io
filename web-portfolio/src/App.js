import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/screens/Home'

class App extends Component {
  render() {
    return (
        <div id="container-wrap">
            <Header></Header>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
      	</div>
    );
  }
}

export default App;
