import React from 'react'
import './Academics.css'
import SquareLink from './SquareLink.js'

const Academics = () => {
    const siSession = {
        backgroundImage: 'url('+require('./supplemental instruction.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#645E4D'
    }
    const purdueOwl = {
        backgroundImage: 'url('+require('./owl_header.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="Acad-Main">
            <SquareLink refer="http://www.purdue.edu/studentsuccess/academic/si/SISchedule.html" theStyle={siSession} />
            <SquareLink refer="https://owl.english.purdue.edu/owl/" theStyle={ purdueOwl } />
        </div>
    )
}

export default Academics;
