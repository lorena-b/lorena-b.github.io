import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="nav-bar">
        <ul>
          <li>
            <NavLink className="nav-link" to="/">ABOUT ME</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/resume">RESUME</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      </div>
    )
  }
}