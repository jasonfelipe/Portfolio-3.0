import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea } from "../components/Form";
import API from "../utils/API";

import './pages.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comment: "",

        }
    }

    componentDidMount() {
        this.setState({
            name: "",
            email: "",
            comment: "",
            show: false,
        });
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }


    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            comment: "",
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let post = {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        }

        API.sendComment(post)
            .then(res => {
                this.setState({
                    name: "",
                    email: "",
                    comment: "",
                    show: true

                })
            })
            .catch(err => console.log(err))
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
                                placeholder="John Doe"
                            />

                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="johndoe@email.com"
                            />

                            <TextArea
                                value={this.state.comment}
                                onChange={this.handleInputChange}
                                name="comment"
                                placeholder="Say something!"
                            />

                            <button className='btn btn-secondary' onClick={this.handleSubmit}>
                                Submit
                            </button>

                        </form>
                    </Row>

                    <div className='modal'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 style={{ color: 'green' }} className='modal-title'>
                                    Comment Created!
                                </h3>
                            </div>

                            <div style={{ color: 'black' }} className='modal-body'>

                                <p>Thanks you for your feedback!</p>
                                <br/>
                                <p>I appreciate it :)</p>


                                <div className='modal-footer'>
                                    <button className='btn btn-danger' onClick={this.hide}>Close</button>
                                </div>
                            </div>
                        </div>

                    </div>


                </Container>
            </div>
        )
    }
}

export default Contact;