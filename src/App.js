import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import Links from './Links.js'
import LinksMenu from './LinksMenu.js'
import MainMenu from './MainMenu.js'


// https://www.npmjs.com/package/react-device-detect

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
                    <NavLink to="/college-slate" className="Title-Link">
                        <h1 className="title">College Slate</h1>
                    </NavLink>
                </div>
                <Switch className="App-Menu">
                    <Route path="/college-slate" component={MainMenu}/>
                    <Route path="/college-slate/links/" component={LinksMenu} />
                </Switch>
            </header>
            <Switch className="App-Content">
                <Route path="/college-slate/links/" component={Links} />
            </Switch>
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
