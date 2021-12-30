import React, { Component } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/screens/Home'
import Resume from './components/screens/Resume'
import Projects from './components/screens/Projects'
import Contact from './components/screens/Contact.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
