import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const TITLE = "Contact"

export default class Contact extends Component {
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