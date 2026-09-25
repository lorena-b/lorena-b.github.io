import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <a id="github-icon" href="https://github.com/lorena-b">
            <span className="iconify-inline" data-icon="entypo-social:github-with-circle" style={{ color: 'black' }} data-width={40} data-height={40}>
            </span></a>
        </div>
        <div>
          <a id="linkedin-icon" href="https://www.linkedin.com/in/lorena-buciu/">
            <span className="iconify-inline" data-icon="entypo-social:linkedin-with-circle" style={{ color: 'black' }} data-width={40} data-height={40}>
            </span></a>
        </div>
        <div id="copyright">© 2024 Lorena Buciu</div>
      </footer>
    )
  }
}
