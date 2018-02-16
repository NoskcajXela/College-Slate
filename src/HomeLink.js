import React from 'react'

import './HomeLink.css'

const HomeLink = (props) => {
    return (
        <div className="Home-Link">
            <a href="https://mycourses.purdue.edu">
                <div className="Home-Name">
                    <div className="opaque">
                        <p>BlackBoard Learn</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default HomeLink;
