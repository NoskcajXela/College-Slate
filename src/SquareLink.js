import React from 'react'

import './SquareLink.css'

const SquareLink = (props) => {
    return (
        <div className="SquareLink-Main">
            <a href={props.refer} target="_blank">
                <div className="SquareLink-Image" style={props.theStyle}>
                    <div className="SquareLink-Hover-Only">
                        
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SquareLink;
