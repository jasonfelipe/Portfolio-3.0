import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import './pages.css';
import Images from "../utils/Images";


class Portfolio extends Component {

    render() {
        return (
            <div>
                <Container>

                    <h1>
                        Completed Projects
                    </h1>

                    <Row>
                        <div className='col-md-4'>
                            <Card
                                src={Images[6]} alt={"marvel-collab"}
                                cardTitle={'Marvel Collab Finder'}
                                cardText='Test'
                            >
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card
                                src={Images[0]} alt={"0penroom"}
                                cardTitle={'0penroom'}
                                cardText='Test'
                            >
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card
                                src={Images[1]} alt={"AHIscanner"}
                                cardTitle={'AHI Scanner'}
                                cardText='Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            >
                            </Card>
                        </div>
                    </Row>

                    <h1>
                        Other Works
                    </h1>

                    <Row>
                        <h4>
                            Content
                        </h4>
                    </Row>


                </Container>
            </div>
        )
    }
}

export default Portfolio;