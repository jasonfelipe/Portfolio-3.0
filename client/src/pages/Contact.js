import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import './pages.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <Container>

                    <h1>
                        Contact Me!
                    </h1>

                    <Row>
                        <p>
                            Will attach database soon!
                        </p>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Contact;