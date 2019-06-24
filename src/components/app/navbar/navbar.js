import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

let RenderBodyModal = (props) => {
	if(props.title === "Lokasi") {
		return ( <> 
					<Button variant="outline-info" href="https://www.waze.com/ul?ll=3.00591690%2C101.56145880&navigate=yes">
						<FontAwesomeIcon icon={['fab', 'waze']} />  Waze 
					</Button>
					<br />
					<br />
					<Button variant="outline-success" href="https://goo.gl/maps/wp6CZDiQrKvMqVkW7">
						<FontAwesomeIcon icon="location-arrow" />  Google Maps 
					</Button>
				</>);
	}
}

class RenderModal extends React.Component {
	render() {
	  return (
		<Modal
		  {...this.props}
		  size="lg"
		  aria-labelledby="contained-modal-title-vcenter"
		  centered
		>
		  <Modal.Header className="d-block">
			<Modal.Title id="contained-modal-title-vcenter" className="text-center">
				{this.props.title}
			</Modal.Title>
		  </Modal.Header>
		  <Modal.Body className="d-block">
				<div className="text-center">
					<RenderBodyModal title={this.props.title} />
				</div>
		  </Modal.Body>
		  <Modal.Footer>
			<Button onClick={this.props.onHide}>Close</Button>
		  </Modal.Footer>
		</Modal>
	  );
	}
  }

  class NavbarAction extends React.Component {
	constructor(...args) {
	  super(...args);
  
	  this.state = { modalShow: false, modalTitle: "Modal"};
	}
  
	render() {
	  let modalClose = () => this.setState({ modalShow: false });
  
	  return (
		<ButtonToolbar>
			<li className="width-25">
				<Button variant="outline-primary" className="width-100" onClick={() => this.setState({ modalShow: true, modalTitle: "RSVP" })}> 
					<FontAwesomeIcon icon="envelope-open" /> 
					<br /> 
					RSVP 
				</Button> 
			</li>
			<li className="width-25">
				<Button variant="outline-primary" className="width-100" onClick={() => this.setState({ modalShow: true, modalTitle: "Kalendar" })}> 
					<FontAwesomeIcon icon="calendar-alt" /> 
					<br /> 
					Kalendar 
				</Button> 
			</li>
			<li className="width-25">
				<Button variant="outline-primary" className="width-100" onClick={() => this.setState({ modalShow: true, modalTitle: "Hubungi" })}> 
					<FontAwesomeIcon icon="mobile-alt" /> 
					<br /> 
					Hubungi 
				</Button> 
			</li>
			<li className="width-25">
				<Button variant="outline-primary" className="width-100" onClick={() => this.setState({ modalShow: true, modalTitle: "Lokasi" })}> 
					<FontAwesomeIcon icon="map-marked-alt"  /> 
					<br /> 
					Lokasi 
				</Button> 
			</li>
  
		  <RenderModal
		    title={this.state.modalTitle}
			show={this.state.modalShow}
			onHide={modalClose}
		  />
		</ButtonToolbar>
	  );
	}
  }

let navbar = (props) => {
  return (
	<div className="container-fluid">
		<nav className="navbar navbar-light bg-light fixed-bottom padding-0" style={{width: props.width+"px"}}>
			<form className="form-inline width-100">
				<ul className="navbar-nav navbar-collapse inline-block">
					<NavbarAction />
				</ul>
			</form>
		</nav>
	</div>
  );
}

export default navbar;