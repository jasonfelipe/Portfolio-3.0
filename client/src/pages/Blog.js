import React, { Component } from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

//Moment JS for React
import Moment from 'react-moment';
import 'moment-timezone';

//Personal Assets
import './pages.css'
import './transitions.css'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                title: 'default',
                text: 'default',
                date: '11/08/2018',
                comments: [],
            }]
        }
    }
    render() {
        return (
            <div>

                <Jumbotron>
                    <h1 id='jumbotron-title'>Random Thoughts</h1>
                    {/* Moment JS */}
                    <Moment id='jumbotron-time' format='llll' />
                </Jumbotron>

                <Container>
                    {this.state.posts.length ? (
                        <Row>
                            {this.state.posts.map((post, index) => {
                                return <div>

                                <Row key={index} >
                                    <h2>{post.title}</h2>
                                    <h3>{post.date}</h3>
                                    <p>{post.text}</p>
                                </Row>


                                <Row>

                                </Row>

                                </div> 
                            })}
                        </Row>

                    ) : (
                            <Row>
                                <h2>NO POSTS FOUND</h2>
                                <h3>Sorry :(</h3>
                            </Row>
                        )}

                </Container>

            </div>
        )
    }
}

export default Blog;