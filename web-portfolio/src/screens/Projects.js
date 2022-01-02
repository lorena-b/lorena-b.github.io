import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import AnimatedPage from '../components/AnimatedPage'
import testimg from "../assets/img/projimg.png"

const TITLE = "Projects"

export default class Projects extends Component {
  render() {
    return (
      <AnimatedPage>
        <div>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          <div className="container">
            {/* Project Info */}
            <div className="info">
              <div className="projects-container">
                <div className="project">
                  <h2>Project 1 Name </h2>
                  <img className="proj-img hover-glow" src={testimg} alt="proj1"/>
                  <div className="proj-info">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                  </div>
                  <div className="code-tags">
                    <button className="tag"> Java </button>
                    <div className="divider" />
                    <button className="tag"> Python </button>
                  </div>
                </div>
                <div className="project">
                  <h2>Project 2 Name </h2>
                  <img className="proj-img hover-glow" src={testimg} alt="proj1"/>
                  <div className="proj-info">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                  </div>
                  <div className="code-tags">
                    <button className="tag"> Java </button>
                    <div className="divider" />
                    <button className="tag"> Python </button>
                  </div>
                </div>
                <div className="project">
                  <h2>Project 3 Name </h2>
                  <img className="proj-img hover-glow" src={testimg} alt="proj1"/>
                  <div className="proj-info">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                  </div>
                  <div className="code-tags">
                    <button className="tag"> Java </button>
                    <div className="divider" />
                    <button className="tag"> Python </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    )
  }
}