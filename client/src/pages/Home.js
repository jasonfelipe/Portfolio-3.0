import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import './pages.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }


    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Test</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                    </Row>

                    <Row>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                    </Row>

                    <div className='row'>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                    </div>

                </Container>
            </div>
        )
    }
}

export default Home