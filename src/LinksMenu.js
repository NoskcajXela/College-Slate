import React from 'react'
import { NavLink } from 'react-router-dom'
import './LinksMenu.css'

const LinksMenu = () => {
    return (
        <ul className="LinksMenu-Main">
            <li>
                <NavLink to="/college-slate/links/popular">Popular</NavLink>
            </li>
            <li>
                <NavLink to="/college-slate/links/academics">Academics</NavLink>
            </li>
            <li>
                <NavLink to="/college-slate/links/events">Events</NavLink>
            </li>
            <li>
                <NavLink to="/college-slate/links/internships">Internships</NavLink>
            </li>
            <li>
                <NavLink to="/college-slate/links/extracurricular">Extracurricular</NavLink>
            </li>
        </ul>
    )
}

export default LinksMenu;
