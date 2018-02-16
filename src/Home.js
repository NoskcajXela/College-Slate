import React from 'react'

import './Home.css'
import SquareLink from './SquareLink.js'

//The links will be changed to objects when a decision is made
const Home = () => {
    const blackBoard = {
        backgroundImage: 'url('+require('./Blackboard_Inc._logo.png')+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
        backgroundRepeat: 'no-repeat',
    }
    const outlook = {
        backgroundImage: 'url('+require('./Outlook.com_icon.png')+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }
    const piazza = {
        backgroundImage: 'url('+require('./piazza_logo_blue.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',

    }
    const lonCapa = {
        backgroundImage: 'url('+require('./lc_logo.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '0.5px solid',
        borderColor: 'black',
    }
    const webAssign = {
        backgroundImage: 'url('+require('./webassignlogo.jpg')+')',
        backgroundSize: 'contain',
        backgroundPosition: '50% 30%',
        backgroundRepeat: 'no-repeat',
        border: '0.5px solid',
        borderColor: 'black',
    }
    const slader = {
        backgroundImage: 'url('+require('./slader-logo-large.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '0.5px solid',
        borderColor: 'black',
    }
    const chegg = {
        backgroundImage: 'url('+require('./Chegg_logo.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }
    const wolfram = {
        backgroundImage: 'url('+require('./alpha_logo_mobile.svg')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }
    const symboLab = {
        backgroundImage: 'url('+require('./symbolab.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }

    return (
        <div className="Home-Main">
            <SquareLink refer="https://mycourses.purdue.edu" theStyle={blackBoard}/>
            <SquareLink refer="https://outlook.office365.com/" theStyle={outlook} />
            <SquareLink refer="https://piazza.com/" theStyle={piazza} />
            <SquareLink refer="https://loncapa.purdue.edu/adm/login" theStyle={lonCapa} />
            <SquareLink refer="https://www.webassign.net/purdue.login.html" theStyle={webAssign} />
            <SquareLink refer="https://www.slader.com" theStyle={slader} />
            <SquareLink refer="https://www.chegg.com" theStyle={chegg} />
            <SquareLink refer="https://www.wolframalpha.com/" theStyle={wolfram} />
            <SquareLink refer="https://www.symbolab.com" theStyle={symboLab} />
        </div>
    )
}

export default Home
