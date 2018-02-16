import React from 'react'

import './Internships.css'
import SquareLink from './SquareLink.js'

const Internships = () => {
    const internX = {
        backgroundImage: 'url('+require('./internx.svg')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#7ED97C',
    }
    const internBlitz = {
        backgroundImage: 'url('+require('./InternBlitzWhite.svg')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#BF455C',
    }
    const xtern = {
        backgroundImage: 'url('+require('./xtern-logo-color-300x70.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
        border: '0.5px solid',
        borderColor: 'black',
    }

    return (
        <div className="Internships-Main">
            <SquareLink refer="https://theinternx.com/" theStyle={ internX } />
            <SquareLink refer="https://www.internblitz.com/" theStyle={ internBlitz } />
            <SquareLink refer="http://xtern.me/" theStyle={xtern} />
        </div>
    )
}

export default Internships;
