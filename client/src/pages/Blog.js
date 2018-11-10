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
            posts: []
        }
    }

    componentDidMount() {
        this.setState({
            posts: [{
                title: 'default',
                text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                date: "11/08/2018",
                images: [],
                comments: []
            },
            {
                title: "Test 2",
                date: Date.now(),
                text: "test 2",
            }
        ]
        })
    }

    getPost = event => {
        event.preventDefault();
        console.log('Hey you clicked ', event.target);
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
                                return <Row key={index}>
                                        <div className='blog-box'>
                                            <div className='blog-header'>
                                                <h2 
                                                    className='blog-link title-header'
                                                    onClick={this.getPost}
                                                >{post.title}</h2>
                                                <Moment format="MM/DD/YYYY">{post.date}</Moment>
                                            </div>

                                            <p className='main-notes'>{post.text}</p>
                                        </div>
                                    </Row>
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