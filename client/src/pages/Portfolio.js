import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import './pages.css';
import Images from "../utils/Images";


class Portfolio extends Component {

    render() {
        return (
            <div>
                <Container>
                    <h1>
                        My Works
                    </h1>





                    <div className='row'>
                        <h2>Content</h2>
                        <Card src={Images[1]} alt={"0penroom"}>
                            <div classname="card-body">
                                <h3>test</h3>
                                <p>It's a test</p>
                            </div>
                        </Card>
                    </div>

                    <Row>
                        <h2>Content</h2>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                    </Row>


                    <Row>
                        <h2>Content</h2>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio;