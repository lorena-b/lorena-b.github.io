import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import av from './img/pfp.png'
import AnimatedPage from '../AnimatedPage'

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
                <p></p>
                <h2 id="info-head">Hi, I'm Lorena!</h2>
                <h2 id="emoji"> 👋</h2>
                <br /><br /> I am experienced in both front-end and back-end development.
                I am proficient in <code>Python</code> and <code>Java</code>. CONTINUE...
                <p />
              </div>
            </div>
          </main>
        </div>
      </AnimatedPage>
    )
  }
}