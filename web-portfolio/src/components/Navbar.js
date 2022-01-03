import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import resumeFile from '../assets/documents/lorena_buciu_resume.pdf'
import '../assets/css/navbar.css'

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
            <a className="nav-link" href={resumeFile} target="_blank" rel="noopener noreferrer">RESUME</a>
          </li>
          <li>
            <NavLink className="nav-link" to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <a className="nav-link" href="mailto:lorena.buciu@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">CONTACT</a>
          </li>
        </ul>
      </nav>
      </div>
    )
  }
}