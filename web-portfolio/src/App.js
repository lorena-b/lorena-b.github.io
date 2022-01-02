import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/screens/Home'
import Projects from './components/screens/Projects'
import { AnimatePresence } from 'framer-motion';

function App() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/projects" exact element={<Projects />} />
            </Routes>
          </AnimatePresence>
        </Router>
        <Footer />
      </div>
    );
}

export default App;
