import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import av from '../assets/img/pfp.png'
import AnimatedPage from '../components/AnimatedPage'
import './home.css'

const TITLE = "About"

export default class Home extends Component {
  render() {
    return (
      <AnimatedPage>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          <div className="container">
            <div id="avatar">
              <a href="https://github.com/lorena-b/lorena-b.github.io"><img className="av hover-glow" src={av} alt="avatar" /></a>
            </div>
            {/* Text Info */}
            <div className="info home-text">
                <h2 className="info-head">Hi, I'm Lorena! <span role="img" aria-label="wave"> 👋</span></h2>
                <p>
                I am a third year Computer Science student at the University of Toronto experienced in both front-end and back-end development.
                I'm interested in developing software systems and am passionate about using my technical expertise to solve a variety of the world's problems.
                I am proficient in <code>Python</code> and <code>Java</code>.
                </p>
                <p>
                I love to learn about new tools and technologies and am currently working on expanding my web development skills.
                In the past, I assisted with the development of <a className="info-link" href="https://github.com/pyta-uoft/pyta">PythonTA</a> and
                particpated in several hackathons such as <a className="info-link" href="https://devpost.com/software/reddit-analysis">TreeHacks</a> and <a className="info-link" href="https://devpost.com/software/superlist">Hack The North</a>.
                Recently, I interned as a full stack developer at <a className="info-link" href="https://www.dashhudson.com/">Dash Hudson</a>.  
                </p>
                <p>
                I am always looking for learning oppourtunities and ways to develop my experiences as an aspiring software engineer. Feel free to connect! :)
                </p>
            </div>
          </div>
      </AnimatedPage>
    )
  }
}
