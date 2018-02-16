import React from 'react'
import Event from './Event.js'
import './Events.css'
import SquareLink from './SquareLink.js'


const Events = () => {
    const lafEventImageStyle = {
        backgroundImage: 'url('+require('./lafayette.jpg')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '0.5px solid',
        borderColor: 'black',
    };
    const purEventImageStyle = {
        backgroundImage: 'url('+require('./Purdue-Sig-Black-Gold-rgb.png')+')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '0.5px solid',
        borderColor: 'black',
    };

    return (
        <div className="Events-Main">
            <SquareLink refer="https://www.homeofpurdue.com/events/calendar.php" theStyle={lafEventImageStyle} />
            <SquareLink refer="https://calendar.purdue.edu" theStyle={purEventImageStyle} />
        </div>
    )
}

export default Events;
