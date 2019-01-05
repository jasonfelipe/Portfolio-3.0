import React, { Component } from "react";

//Bootstrap based Containers
import { Row, Container } from "../components/Grid";
import { Input, TextArea } from "../components/Form";

//For Modal
import { Modal } from 'react-bootstrap'


//The API
import API from "../utils/API";

//Personal assets
import './pages.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            show: false
        };
        this.hideModal = this.hideModal.bind(this)
        this.showModal = this.showModal.bind(this)
    }


    showModal() {
        this.setState({
            show: true
        });
        // console.log('Modal is: ' + this.state.show);
    }

    hideModal() {
        this.setState({
            show: false
        });
        // console.log('Modal is: ' + this.state.show);
    }

    resetForm() {
        this.setState({
            name: "",
            email: "",
            message: "",
        });
        // console.log('Form reset!');
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        let message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };
        // console.log('the message: ', message);

        console.log('Firing API...');
        API.createMessage(message)
            .then(res => {
                console.log(res);
                this.resetForm();
                this.showModal();

            }).catch(err => console.log(err));
        // console.log('Something should happen...');
    };


    render() {
        return (
            <div>
                <Container>
                    <h2 className='header'>
                        Contact Me!
                    </h2>

                    <Row>
                        <form className='text-center'>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Your Name (Required)"
                            />

                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="E-mail (Required)"
                            />

                            <TextArea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name="message"
                                placeholder="Say something! (REQUIRED!)"
                            />

                            <button
                                className='btn btn-secondary'
                                onClick={this.handleSubmit}
                                disabled={!this.state.name || !this.state.email || !this.state.message}
                            >
                                Submit
                            </button>
                        </form>
                    </Row>

                    <Modal className='modal fade' show={this.state.show}>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 style={{ color: 'green' }} className='modal-title'>
                                    Message Sent!
                                </h3>
                            </div>
                            <div style={{ color: 'black' }} className='modal-body'>

                                <p>Thanks for the message!</p>
                                <p>I appreciate it :)</p>

                                <div className='modal-footer'>
                                    <button className='btn btn-danger' onClick={this.hideModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default Contact;