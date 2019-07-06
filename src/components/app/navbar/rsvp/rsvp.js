import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import axios from 'axios';

class Rsvp extends React.Component {
	constructor(props){
        super(props);
        this.state={email: '', nama: '', telNo: '', kehadiran: '', bilKehadiran: '', ucapan: '', attOpts: [{value: '', display: 'Sila Pilih'},{value: 'H', display: 'Hadir'},{value: 'T', display: 'Tidak Hadir'},{value: 'M', display: 'Mungkin'} ]};
        this.handleChange = this.handleChange.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.submit = this.submit.bind(this);
     }
     
     componentDidUpdate(prevProps, prevState) {
        if(this.props.isSubmit)
        {
            this.props.toggleSubmitForm();
            this.submit();
        }
      }

     handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    handleEmailInput() {
        if(this.state.email != null){
            axios.get(`${process.env.REACT_APP_HOST_URL}/Rsvp/GetByEmail/${this.state.email}`)
                .then(res => {
                    if(res.data !== null) {
                        const data = res.data;
                        this.setState({nama: data.name});
                        this.setState({telNo: data.telNo});
                        this.setState({kehadiran: data.attendance});
                        this.setState({bilKehadiran: data.attCount});
                        this.setState({ucapan: data.wishes});
                    }
            });
        }
   }

    submit(){
        if(this.state.email == "" || this.state.nama == "" || this.state.kehadiran == "")
            return false;

            let closeModal = this.props.isClose;
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_HOST_URL}/Rsvp/Create`,
            data: {
                Id_EcardDetail: 1,
                Email: this.state.email,
                Name: this.state.nama,
                TelNo: this.state.telNo,
                Attendance: this.state.kehadiran,
                AttCount: this.state.bilKehadiran,
                Wishes: this.state.ucapan,
            }
        }).then(function (response) {
            if(response.status == 200) {
                closeModal();
            }
          });
    }

    render() {

    return (
        <Form>
            <Col sm="10">
                <Form.Group controlId="email">
                    <Form.Control name="email" type="text" placeholder="E-mail"  value={this.state.email} onChange={this.handleChange.bind(this)} onBlur={this.handleEmailInput} required autoComplete="off"/>
                </Form.Group>

                <Form.Group controlId="nama">
                    <Form.Control name="nama" type="text" placeholder="Nama"  value={this.state.nama} onChange={this.handleChange.bind(this)} required autoComplete="off"/>
                </Form.Group>
                <Form.Group controlId="telNo">
                    <Form.Control name="telNo" type="text" placeholder="Tel. No" value={this.state.telNo} onChange={this.handleChange.bind(this)} autoComplete="off" />
                </Form.Group>
                <input type="text" name="office_TelNo" value="1" style={{display: "none"}} tabIndex="-1" onChange={this.handleChange.bind(this)}  autoComplete="off"></input>
                <Form.Group controlId="kehadiran">
                    <Form.Label>Kehadiran</Form.Label>
                    <Form.Control as="select" name="kehadiran" value={this.state.kehadiran} onChange={this.handleChange.bind(this)} autoComplete="off">
                        {this.state.attOpts.map((attOpt) => <option key={attOpt.value} value={attOpt.value}>{attOpt.display}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="bilKehadiran">
                    <Form.Control name="bilKehadiran" type="number" placeholder="Bilangan Kehadiran" value={this.state.bilKehadiran} onChange={this.handleChange.bind(this)} autoComplete="off"/>
                </Form.Group>
                <Form.Group controlId="ucapan">
                    <Form.Label>Ucapan</Form.Label>
                    <Form.Control name="ucapan" as="textarea" rows="3" value={this.state.ucapan} onChange={this.handleChange.bind(this)} autoComplete="off" />
                </Form.Group>
            </Col>
                
        </Form>);
    }
}
    
export default Rsvp;