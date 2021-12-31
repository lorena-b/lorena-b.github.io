import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import av from './img/pfp.png'
import AnimatedPage from '../AnimatedPage'
import { Link } from 'react-router-dom'

const TITLE = "About"

export default class Home extends Component {
  render() {
    return (
      <AnimatedPage>
        <div>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          <main id="main">
            <div className="container">
              <div id="avatar">
                <img src={av} alt="avatar" />
              </div>
              {/* Text Info */}
              <div className="info">
                <h2 id="info-head">Hi, I'm Lorena!</h2>
                <h2 id="emoji"> 👋</h2>
                <p></p>
                I am a second year Computer Science student at the University of Toronto experienced in both front-end and back-end development.
                I'm interested in developing software systems and am passionate about using my technical expertise to solve a variety of the world's problems. 
                I am proficient in <code>Python</code> and <code>Java</code>. 
                <br /><br />
                I love to learn about new tools and technologies and am currently working on expanding my web development skills.  
                In the past, I assisted with the development of <Link to="https://github.com/lorena-b/pyta">PythonTA</Link> and particpated in several hackathons such as <Link to="https://devpost.com/software/reddit-analysis">TreeHacks</Link> and <Link to="https://devpost.com/software/superlist">Hack The North.</Link>
                <br /><br />
                I am always looking for learning oppourtunities and ways to develop my experiences as an aspiring software engineer. Feel free to connect! :)
                <p />
              </div>
            </div>
          </main>
        </div>
      </AnimatedPage>
    )
  }
}