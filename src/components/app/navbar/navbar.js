import React from 'react';
import './navbar.css';
import Rsvp from './rsvp/rsvp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import Dropdown from './dropdown';
import { DateTime } from 'luxon';
import { css } from 'emotion';
import { Col } from 'react-bootstrap';

const componentStyles = css`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 0 0 30px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const linkStyles = css`
  text-decoration: none;
  display: block;
  color: #E42D2D;
  font-size: 18px;
  text-align: center;
  padding: 6px;
`;


let submit = () => {
    console.log(this.state.name, this.state.age);
 }

let RenderBodyModal = (props) => {
	if(props.title === "RSVP") {
		return(	<Rsvp isSubmit={props.isSubmit} toggleSubmitForm={props.toggleSubmitForm} isClose={props.isClose}/>);
	}else if(props.title === "Kalendar") {
		const startTime  = DateTime.fromObject({ year: 2020, month: '01', day: 25, hour: 11 });
		const endTime = startTime.plus({ hours: 5 });
		const duration = 5;
		const event = {
			description: 'Walimatul Urus Sulhi & Anisah',
			duration,
			location: 'Dewan MBSA Seksyen 28',
			title: 'Walimatul Urus Sulhi & Anisah',
			startDatetime: `${startTime.toFormat('yyyyLLdd')}T${startTime.toFormat('HHmmss')}`,
			endDatetime: `${endTime.toFormat('yyyyLLdd')}T${endTime.toFormat('HHmmss')}`,
			timezone: 'Asia/Kuala_Lumpur',
		}
		const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);
		
		return(<AddToCalendarDropdown
			buttonText="Simpan Ke Kalendar"
			className={componentStyles}
			linkProps={{
			  className: linkStyles,
			}}
			event={event}
		  />);
	}else if(props.title === "Hubungi") {
		return( 
				<div >
					<Table responsive striped bordered hover size="sm" >
						<thead>
							<tr>
								<th>Nama</th>
								<th>Telefon</th>
								<th>WhatsApp</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Ahmad Syafiq</td>
								<td>
									<a href="tel:+60123664775">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon="phone-square-alt" /> 
										</div>
									</a> 
								</td>
								<td>
									<a href="https://wa.me/60123664775">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon={['fab', 'whatsapp']} />
										</div>
									</a> 
								</td>
							</tr>
							<tr>
								<td>Adlin Syahirah</td>
								<td>
									<a href="tel:+60199917193">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon="phone-square-alt" /> 
										</div>
									</a> 
								</td>
								<td>
									<a href="https://wa.me/60199917193">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon={['fab', 'whatsapp']} />
										</div>
									</a> 
								</td>
							</tr>
							<tr>
								<td>Adlin Syazana</td>
								<td>
									<a href="tel:+60173959764">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon="phone-square-alt" /> 
										</div>
									</a> 
								</td>
								<td>
									<a href="https://wa.me/60173959764">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon={['fab', 'whatsapp']} />
										</div>
									</a> 
								</td>
							</tr>
							<tr>
								<td>Sakenah Ahmad</td>
								<td>
									<a href="tel:+60122006153">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon="phone-square-alt" /> 
										</div>
									</a> 
								</td>
								<td>
									<a href="https://wa.me/60122006153">
										<div style={{height: "100%", width: "100%"}}>
											<FontAwesomeIcon icon={['fab', 'whatsapp']} />
										</div>
									</a> 
								</td>
							</tr>
						</tbody>
					</Table>
				</div>);
	}else if(props.title === "Lokasi") {
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
	constructor(...args) {
	  super(...args);
  
	  this.state = { isSubmit: false};
	}

	toggleSubmitForm = () => this.setState({ isSubmit: !this.state.isSubmit });

	render() {
		let submitBtn;
		if(this.props.title == "RSVP")
		{
			submitBtn = <Button variant="success" onClick={this.toggleSubmitForm}>Submit</Button>;
		}
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
					<RenderBodyModal title={this.props.title} toggleSubmitForm={this.toggleSubmitForm}  isClose={this.props.onHide} isSubmit={this.state.isSubmit}/>
				</div>
		  </Modal.Body>
		  <Modal.Footer>
			{submitBtn}
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