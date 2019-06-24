import React, { Component } from 'react';
import Navbar from './navbar';
import Body from './body';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpen, faCalendarAlt, faMobileAlt, faMapMarkedAlt, faHeart, faCalendarDay, faClock, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faWaze } from '@fortawesome/free-brands-svg-icons'
import './app.css';
import '../../assets/css/bootstrap.min.css';

library.add(faEnvelopeOpen, faCalendarAlt, faMobileAlt, faMapMarkedAlt, faHeart, faCalendarDay, faClock, faLocationArrow, faWaze);

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = { width: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	  }
  
	/**
	 * Calculate & Update state of new dimensions
	 */
	updateWindowDimensions() {
		if(window.innerWidth > 576) {
		  this.setState({ width: 576 });
		} else {
		  this.setState({ width: window.innerWidth});
		}
	}
  
	/**
	 * Add event listener
	 */
	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener("resize", this.updateWindowDimensions.bind(this));
	}
  
	/**
	 * Remove event listener
	 */
	componentWillUnmount() {
	  window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
	}
  
	render() {
	  return(
		<div className="App" style={{width: this.state.width}}>
	 		<Navbar width={this.state.width} />
	 		<Body />
	    </div>
	  );
	}
  }