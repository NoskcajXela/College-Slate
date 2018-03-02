import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Links.css'
import Home from './Home.js'
import Academics from './Academics.js'
import Events from './Events.js'
import Schedule from './Schedule.js'
import Internships from './Internships.js'
import Extracurricular from './Extracurricular.js'


const Links = () => {
    return (
        <div className="Links-Main">
            <div className="Links-Container">
                <Switch className="Links-Switch">
                    <Route exact path="/links/popular" component={Home} />
                    <Route path="/links/academics" component={Academics} />
                    <Route path="/links/events" component={Events} />
                    <Route path="/links/schedule" component={Schedule} />
                    <Route path="/links/internships" component={Internships}/>
                    <Route path="/links/extracurricular" component={Extracurricular}/>
                </Switch>
            </div>
            <div className="Links-Sidebar">
                <div className="Links-Sidebar-Container">
                    <div className="Links-Sidebar-Weather">
                        <h3>Purdue Weather</h3>
                        <div className="Weather">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links;
