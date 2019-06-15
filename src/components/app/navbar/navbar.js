import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'	

export default function Navbar(props) {
  return (
	<div className="container-fluid">
		<nav className="navbar navbar-light bg-light fixed-bottom padding-0" style={{width: props.width+"px"}}>
			<form className="form-inline width-100">
				<ul className="navbar-nav navbar-collapse inline-block">
					<li className="width-25">
						<a className="btn btn-outline-primary width-100"  href="#"> <FontAwesomeIcon icon="envelope-open" /> <br /> RSVP</a>
					</li>
					<li className="width-25">
						<a className="btn btn-outline-primary width-100" role="button" href="#"> <FontAwesomeIcon icon="calendar-alt" /> <br /> Kalendar </a>
					</li>
					<li className="width-25">
						<a className="btn btn-outline-primary width-100" role="button" href="#"> <FontAwesomeIcon icon="mobile-alt" /> <br /> Hubungi</a>
					</li>
					<li className="width-25">
						<a className="btn btn-outline-primary width-100" role="button" href="#"> <FontAwesomeIcon icon="map-marked-alt" /> <br /> Lokasi</a>
					</li>
				</ul>
			</form>
		</nav>
	</div>
  );
}

