import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import AnimatedPage from '../components/AnimatedPage'
import schedule from "../assets/img/schedule.png"
import redditgif from "../assets/img/demogif.gif"
import vslr from "../assets/img/frontend.png"

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
                  <h2>UofT Course Scheduling App</h2>
                  <a href="https://github.com/lorena-b/UofT-Course-Scheduling-Application"><img className="proj-img hover-glow" src={schedule} alt="proj1"/></a>
                  <p className="proj-info">
                  A user specifies which courses they want to take, and also specify filters, like "No classes after 5 PM", or to find sections with no conflicts, 
                  through the CLI. The program queries the U of T Academic Calendar 
                  for the Tutorial & Lecture Sections of each requested course, and creates all schedules that 
                  meet the given criteria. This can be navigated either directly in the CLI. The user selects a 
                  generated schedule, and the program generates .ics/.csv/.jpg files for different purposes, such as 
                  for calendar apps.
                  </p>
                  <div className="code-tags">
                    <button className="tag"> Java </button>
                  </div>
                </div>
                <div className="project">
                  <h2>Reddit Topic Analysis</h2>
                  <a href="https://github.com/lorena-b/TreeHacks"><img className="proj-img hover-glow" src={redditgif} alt="proj2"/></a>
                  <p className="proj-info">
                  The program asks the user to input a specific topic or keyword. It then searches through about 1,000 Reddit posts with that corresponding keyword. It then outputs the market popularity of that topic. It also outputs consumer sentiment towards that topic,
                   from negative to positive expressed as a percentage. Used Flask to establish a back-end server and API to receive user input then use our processing algorithms to return the relevant data. The PRAW reddit API wrapper for python allowed us to retrieve post data from reddit.
                  </p>
                  <div className="code-tags">
                    <button className="tag"> Python </button>
                    <div className="divider" />
                    <button className="tag"> Flask </button>
                  </div>
                </div>
                <div className="project">
                  <h2>VSLR Model</h2>
                  <a href="https://github.com/lorena-b/VSLR-model"><img className="proj-img hover-glow" src={vslr} alt="proj3"/></a>
                  <p className="proj-info">
                  Using Vancouver sea level rise CSV data, this program extrapolates the predicted sea level rise over the years using a combination of 
                  SARIMAX and Theil-Sen regression models. Using Dash and Plotly capabilities these values are plotted onto a map of Vancouver with an interactive 
                  slider to visualize which areas in the Vancouver region are most susceptible to flooding 280 years into the future. 
                  </p>
                  <div className="code-tags">
                    <button className="tag"> Python </button>
                    <div className="divider" />
                    <button className="tag"> Dash </button>
                    <div className="divider" />
                    <button className="tag"> Plotly </button>
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