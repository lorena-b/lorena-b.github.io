import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="nav-bar">
        <ul>
          <li>
            <a href="index.html"><i className />ABOUT ME</a>
          </li>
          <li>
            <a href="resume.html"><i className />RESUME</a>
          </li>
          <li>
            <a href="projects.html"><i className />PROJECTS</a>
          </li>
          <li>
            <a href="contact.html"><i className />CONTACT</a>
          </li>
        </ul>
      </nav>
      </div>
    )
  }
}