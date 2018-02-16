import React from 'react'

import './Event.css'

const Event = (props) => {
    return (
        <div className="Event-Main">
            <a href={props.refer} target="_blank">
                <div className="Event-Image" style={props.theStyle}>

                </div>
            </a>
        </div>
    )
}

export default Event;
