import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AnimatedPage from '../AnimatedPage'

const TITLE = "Resume"

function Resume() {
    const [embedURL] = useState("https://drive.google.com/file/d/17MGMyTKIm5eKPO6lxcFJv8W3SS1q1iFu/preview")
    return (
        <AnimatedPage>
        <div>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main id="main">
                <div className="container">
                    {/* Resume Info */}
                    <div className="info">
                        <iframe src={embedURL} width="640" height="480" allow="autoplay" title="resume"></iframe>
                    </div>
                </div>
            </main>
        </div>     
        </AnimatedPage>
    )
}

export default Resume;