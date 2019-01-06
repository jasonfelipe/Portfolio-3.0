import React, { Component } from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

//Moment JS for React
import Moment from 'react-moment';
import 'moment-timezone';

//For Modal
import { Modal } from 'react-bootstrap'

//Personal Assets
import './blog.css'
import API from "../utils/API";



// TO DO -
// Hook up database to this:
// Click on Title of Post -> Searches Title in Database -> Gets Post from Database -> Puts Post into Modal -> Shows Modal on Website. 
//Potential problems => Same Title results in multiple posts. 


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            posts: [],
            clickedPost: {
                title: "",
                text: "",
                date: "",
                comment: []
            }

        }
    }

    componentDidMount() {
        this.setState({
            posts: [{
                title: "FIRST POST!",
                date: Date.now(),
                text: "This is a test of the first blog post.  " + 
                      "Hopefully someday I'll build in a fully functional blog!",
                images: [],
                comments: []
            }
            ]
        });
        
        // this.getPosts();
    }

    getClickedPost = event => {
        event.preventDefault();
        const value = event.target.value
        // console.log('Hey you clicked ', event.target);

        console.log(value);


        // const title = document.getElementsById('title-header')
        // console.log(title);
    }

    getPosts = () => {
        API.getPosts()
        .then(res => {
            console.log('Response of getposts', res);
        })
        .catch(err => console.log(err))
    }


    showModal = () => {
        this.setState({
            modal: true
        })
    }

    hideModal = () => {
        this.setState({
            modal: false
        })
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
                                    <div 
                                        className='blog-box'
                                    >
                                        <div className='blog-header'>
                                            <h2
                                                onClick={this.getClickedPost}
                                                className='blog-title'
                                            >
                                            {post.title}
                                            </h2>
                                            <Moment className='blog-text' format="MM/DD/YYYY">{post.date}</Moment>
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


                    <Modal>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 style={{ color: 'green' }} className='modal-title'>
                                    {/* Place Title Here */}
                                    Placeholder title
                                </h3>
                            </div>
                            <div style={{ color: 'black' }} className='modal-body'>

                                    {/* Place Blog Post Body Here */}
                                    Placeholder body
                                <div className='modal-footer'>
                                    <button className='btn btn-danger' onClick={this.hideModal}>Close</button>
                                    <button className='btn btn-success'>Show Comments</button>
                                </div>
                            </div>
                        </div>
                    </Modal>

                </Container>

            </div>
        )
    }
}

export default Blog;