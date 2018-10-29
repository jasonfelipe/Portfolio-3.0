import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn, TextArea } from "../components/Form";
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

    reset = () => {
        this.setState({
            name: "",
            email: "",
            comment: "",
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let comment = {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        }
        API.sendComment(comment)
            .then(res => {
                console.log(res);
                this.reset();
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

                </Container>
            </div>
        )
    }
}

export default Contact;