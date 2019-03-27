import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';


class App extends React.Component {

    state = { placeY: null  }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let whereamI =  window.scrollY;


        this.setState ({ placeY: whereamI })
    }

    render () {
        return (
            <div>
                <div className="scroll-app">
                    <h1 id="top-text">Rotating Icons On Scroll <small id="text">use the scrollbar</small></h1>
                    <a className="sm-icon-facebook" href='#' style={{ transform:`rotate(${this.state.placeY}deg)`}}><span className='fa fa-facebook'></span></a>
                    <a className="sm-icon-twitter" href='#' style={{ transform:`rotate(${this.state.placeY}deg)`}}><span className='fa fa-twitter'></span></a>
                    <a className="sm-icon-google" href='#' style={{ transform:`rotate(${this.state.placeY}deg)`}}><span className='fa fa-google'></span></a>
                </div>
                <p id="footer">Code for developing my JavaScript ability<br/>
                    Please contact <a href="#" target="_blank">Hasan</a> for features of this program
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));