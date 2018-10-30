import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Me from '../assets/images/profile/its-me.jpg';
import { List, ListItem } from '../components/List';
import Moment from 'react-moment';
import 'moment-timezone';
import { CSSTransition } from 'react-transition-group';

import './pages.css'
import './transitions.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: [
                'Video Games (Fighting games)',
                'Steak (Medium-Rare)',
                'Traveling (Anywhere)',
                "Pets (I don't have any... )"
            ],
            jumbotronTitles: ['Welcome!'],
            currentTitle: "",
            showTitle: false,
            randomNumber: ""

        }
    }

    componentDidMount() {
        this.titleRandomizer();
    }

    titleRandomizer = () => {
        let title = this.state.jumbotronTitles[Math.floor(Math.random() * Math.floor(this.state.jumbotronTitles.length))];
        this.randomNumber();
        this.setState({
            currentTitle: title,
            showTitle: true,
            jumbotronTitles: [
                'Welcome to Test Number #' + this.state.randomNumber,
                "Welcome!", 
                'Currently Adapting...', 'Currently Studying...', 'Currently Dreaming...', "You're not alone...",
                " お前はもう。。。", 'ジェイソン・フェリペ', '何！？', 'こんにちは！', 
                '⬇⬊➡ + 👊', '➡☆⬇⬊ + 2', '➡⬇⬊ + 👊', '↑↑↓↓←→←→BA', '⟲ + 👊'
            ],
        })
        this.changeTitle(5000);
    }


    hideTitle = () => {
        this.setState({
            showTitle: false
        })
    }

    changeTitle = time => {
        setTimeout(() => {this.hideTitle();}, 4000);
        setTimeout(this.titleRandomizer, time)
    }


    randomNumber = () => {
        let number = Math.floor(Math.random() * Math.floor(999999))
        this.setState({
            randomNumber: number
        })
    }


    render() {
        return (
            <div>
                <Jumbotron>
                    <CSSTransition
                        in={this.state.showTitle}
                        classNames='pop'
                        timeout={5000}
                        unmountOnExit
                        onExited={() => {
                            this.setState({
                              currentTitle: 'Welcome!',
                            });
                          }}
                    >
                        <h1 id='jumbotron-title'>{this.state.currentTitle}</h1>
                    </CSSTransition>
                    <Moment id='jumbotron-time' format='llll' />
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size='md-6'>
                            <h1 className='text-center'>Welcome to My Place!</h1>
                            <Row>
                                <div className='center'>
                                    <img src={Me} id='mypicture' alt='me' />
                                </div>
                            </Row>
                            <Row>
                                <p className='smallNotes'>
                                    Born on: 11/08/1992
                                    <br />
                                    Born in: Vancouver, Canada (Dual Citizenship in CA and US)
                                </p>
                            </Row>

                            <h3 className='text-center'>Likes</h3>
                            <Row>
                                <div id='likes' className='center'>
                                    <List>
                                        {this.state.likes.map(likes => {
                                            return <ListItem key={likes}>
                                                {likes}
                                            </ListItem>
                                        })}
                                    </List>
                                </div>
                            </Row>
                        </Col>


                        <Col size='md-6'>
                            <Row>
                                <h2 className='title-header'>Who Am I?</h2>
                                <p className='mainNotes'>
                                    Hello! I'm Jason Felipe and I'm an experienced teacher and tutor for a variety of topics,
                                    including: ESL, front-end development, and back-end development, and Javascript. I am currently
                                    employed by University of Arizona as a teacher's aide for Trilogy Education. I will
                                    always and forever will be a learner and a teacher.
                                </p>
                            </Row>

                            <Row>
                                <h2 className='title-header'>Globally Focused</h2>
                                <p className='mainNotes'>
                                    I was born in Vancouver, Canada, but currently reside as a proud Arizonanian. I've worked
                                    in Vancouver as an English tutor for exchange students trying to get an education, and I've
                                    also worked in Japan (Kashima, Ibaraki) for two years as a teacher for young children, high school students,
                                    and new parents.
                                </p>
                            </Row>

                            <Row>
                                <h2 className='title-header'>Always Learning</h2>
                                <p className='mainNotes'>
                                    Coding, like any other language, changes every single day. For example in the English language, today's memes and slang could be
                                    tomorrow's anachronistic sayings. On the other hand, some picture with text, or a ten-second video can become
                                    the next viral thing on Earth!

                                    <br />
                                    With that said, the improvements of computers and the languages they use are changing
                                    and improving on a constant basis. While Javascript is a widely used language, many packages, frameworks, and APIs are
                                    getting created and updated every day. To me, adapting and familiarity are a must in both the coding and teaching world.
                               </p>
                            </Row>

                            <h4>Check out my stuff!</h4>
                            <Row>
                                <a href='https://github.com/jasonfelipe/' rel='noopener noreferrer' target='_blank'>Github</a>
                            </Row>
                            <Row>
                                <a href='https://www.linkedin.com/in/jason-felipe-089558107/' rel='noopener noreferrer' target='_blank'>Linkedin</a>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Home