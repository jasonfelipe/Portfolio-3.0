import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn, TextArea } from "../components/Form"

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


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <Container>

                    <h1 className='header'>
                        Contact Me!
                    </h1>

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

                            <FormBtn>
                                Submit
                            </FormBtn>
                        </form>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Contact;