import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const TITLE = "Resume"

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <main id="main">
                    <div className="container">
                        {/* Resume Info */}
                        <div className="info">
                            <iframe src="https://drive.google.com/file/d/17MGMyTKIm5eKPO6lxcFJv8W3SS1q1iFu/preview" width="640" height="480" allow="autoplay" title="resume"></iframe>                        </div>
                    </div>
                </main>

            </div>
        )
    }
}