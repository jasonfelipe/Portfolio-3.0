import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import './pages.css'

class Portfolio extends Component {


    render() {
        return (
            <div>
                <Container>
                    <h1>
                        CONTENT
                    </h1>

                    <div className='row'>
                        <h2>Content</h2>
                    </div>

                    <Row>
                        <h2>Content</h2>
                    </Row>

            
                    <Row>
                        <h2>Content</h2>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio;