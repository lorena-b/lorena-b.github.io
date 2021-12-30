import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const TITLE = "Resume"

export default class Resume extends Component {
  render() {
    return (
      <div> 
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

   
      </div>
    )
  }
}