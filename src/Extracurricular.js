import React from 'react'

import './Extracurricular.css'
import SquareLink from './SquareLink.js'

const Extracurricular = () => {
    const imLeagues = {
        backgroundImage: 'url('+require('./iml-logo-outline_1.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black'

    }

    return (
        <div className="Extracurricular-Main">
            <div className="BoilerLink">
                <a href="https://boilerlink.purdue.edu/" target="_blank">
                    <div className="BoilerLink-Image">
                        BoilerLink
                        <div className="BoilerLink-Hover-Only">

                        </div>
                    </div>
                </a>
            </div>
            <SquareLink refer="http://www.imleagues.com/Purdue" theStyle={imLeagues} />
        </div>
    )
}

export default Extracurricular;
