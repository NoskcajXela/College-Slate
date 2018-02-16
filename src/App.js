import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home.js'
import Academics from './Academics.js'
import Events from './Events.js'
import Schedule from './Schedule.js'
import Internships from './Internships.js'
import Extracurricular from './Extracurricular.js'

class App extends Component {
    constructor() {
        super();
        document.title = "College Slate"

        this.state = {
            openWeather: {

            },
        }

        // this.fetchWeather()

        const weatherImgStyle = {
            border: 'medium none',
            width: '45px',
            height: '45px',
            // background: 'url(http://openweathermap.org/img/w/'+this.state.openWeather.weather[0].icon+'.png) repeat scroll 0% 0% transparent'
        }
    }

    fetchWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=4928096&appid=34fd8b1849085bd9ddcc051286f46016`)
            .then(response => response.json())
            .then(response => this.setState({ openWeather: response }))
    }

    // componentDidMount = () => {
    //     window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []
    //     window.myWidgetParam.push({
    //         id: 22,
    //         cityid: '2643743',
    //         appid: '34fd8b1849085bd9ddcc051286f46016',
    //         units: 'imperial',
    //         containerid: 'openweathermap-widget-22',
    //     })
    //     Widget
    // }

    // <img height="45" width="45"
    //     alt="title"
    //     style={ weatherImgStyle }
    //     src="http://openweathermap.org/images/transparent.png">
    // </img>

  render() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-heading">
                    <NavLink to="/" className="Title-Link">
                        <h1 className="title">College Slate</h1>
                    </NavLink>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/academics">Academics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/internships">Internships</NavLink>
                    </li>
                    <li>
                        <NavLink to="/extracurricular">Extracurricular</NavLink>
                    </li>
                </ul>
            </header>
            <div className="App-Main">
                <div className="App-Container">
                    <Switch className="App-Switch">
                        <Route exact path="/" component={Home} />
                        <Route path="/academics" component={Academics} />
                        <Route path="/events" component={Events} />
                        <Route path="/schedule" component={Schedule} />
                        <Route path="/internships" component={Internships}/>
                        <Route path="/extracurricular" component={Extracurricular}/>
                    </Switch>
                </div>
                <div className="App-Sidebar">
                    <div className="App-Sidebar-Container">
                        <div className="App-Sidebar-Weather">
                            <h3>Purdue Weather</h3>
                            <div className="Weather">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="App-Space">
            </div>
            <footer className="App-Footer">
                <p>&#xa9; 2018 College Slate LLC</p>
                <p>Background photo courtesy: Shyam Sundar on Unsplash</p>
            </footer>
        </div>
    );
  }
}

export default App;
