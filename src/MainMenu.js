import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainMenu.css'

const MainMenu = () => {
    return (
        <ul className="MainMenu-Main">
            <li>
                <NavLink to="/college-slate/links/">Links</NavLink>
            </li>
            <li>
                <NavLink to="/college-slate/textbooks">Textbooks</NavLink>
            </li>
        </ul>
    )
}

export default MainMenu;
