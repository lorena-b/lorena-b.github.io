import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="nav-bar">
        <ul>
          <li>
            <Link className="nav-link" to="/">ABOUT ME</Link>
          </li>
          <li>
            <Link className="nav-link" to="/resume">RESUME</Link>
          </li>
          <li>
            <Link className="nav-link" to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      </div>
    )
  }
}