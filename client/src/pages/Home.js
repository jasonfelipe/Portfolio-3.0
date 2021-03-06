import React, { Component } from "react";

//Containers based off Bootstrap
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';

//Moment JS for React
import Moment from 'react-moment';
import 'moment-timezone';

//React CSS Animations
import { CSSTransition } from 'react-transition-group';

//Fontawesome stuff.
import FAIcon from '../components/Icons/FAIcon';

//Personal Assets
import Me from '../assets/images/profile/its-me.jpg';
import './pages.css'
import './transitions.css'
import '../components/TxtType'

class Home extends Component {
    //Setting up the State
    constructor(props) {
        super(props);
        this.state = {
            likes: [
                'Video Games (Fighting games)',
                'Steak (Medium-Rare)',
                'Traveling (Anywhere)',
                "Pets (I don't have any... )"
            ],
            skills: [
                'React',
                'Mongo DB',
                'Node.js',
                'jQuery',
                'Currently learning Python'
            ],
            jumbotronTitles: ['Welcome!'],
            currentTitle: "",
            showTitle: false,
            randomNumber: ""

        }
    }

    //Puts this up before the page loads
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

    //For transitional purposes
    hideTitle = () => {
        this.setState({
            showTitle: false
        })
    }
    changeTitle = time => {
        setTimeout(() => { this.hideTitle(); }, 4000);
        setTimeout(this.titleRandomizer, time)
    }

    //Something extra for the title.
    randomNumber = () => {
        let number = Math.floor(Math.random() * Math.floor(999999))
        this.setState({
            randomNumber: number
        })
    }

    handleLinks = (event) =>{
        event.preventDefault();
        let icon = event.target.dataset.icon;
        let win;
        console.log("Clicked on: ", icon);
        
        switch (icon){
            case "github":
                console.log(icon);
                win = window.open("https://github.com/jasonfelipe", '_blank');
                win.focus();
                break;

            case 'linkedin':
                    console.log(icon);
                    win = window.open("https://www.linkedin.com/in/jason-felipe-089558107", '_blank');
                    win.focus();
                    break;
        }
    }

    render() {
        return (
            <div>
                <Jumbotron>

                    {/* CSS Animations */}
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

                    {/* Moment JS */}
                    <Moment id='jumbotron-time' format='llll' />

                </Jumbotron>
                <Container>
                    {/* Begin Left Side Column */}
                    <Row>
                        <Col size='md-6'>
                            <h1 className='center'>My Base On The Internet!</h1>
                            <Row>
                                <div className='center'>
                                    <img src={Me} id='mypicture' alt='me' />
                                </div>
                            </Row>
                            
                            <h3 id='left-side-title'>Skills</h3>
                            <Row>
                                <div id='skills' className='center'>
                                    <List>
                                        {this.state.skills.map(skills => {
                                            return <ListItem key={skills}>
                                                {skills}
                                            </ListItem>
                                        })}

                                    </List>
                                </div>
                            </Row>

                            <h3 id='left-side-title'>Likes</h3>
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


                        {/* End Left Side Column */}


                        {/* Begin Right Side Column */}
                        <Col size='md-6'>
                            <Row>
                                <h2 className='title-header'>Who Am I?</h2>
                                <p className='main-notes'>
                                    Hello! I'm Jason Felipe and I'm an experienced teacher and tutor for a variety of topics,
                                    including: ESL, front-end and back-end development, and Javascript. I am currently
                                    employed by University of Arizona as a teacher's aide for Trilogy Education. I will
                                    always and forever will be a learner and a teacher.
                                </p>
                            </Row>

                            <Row>
                                <h2 className='title-header'>Globally Focused</h2>
                                <p className='main-notes'>
                                    I was born in Vancouver, Canada, but currently reside as a proud Arizonanian. I've worked
                                    in Vancouver as an English tutor for exchange students trying to get an education, and I've
                                    also worked in Japan (Kashima, Ibaraki) for two years as a teacher for young children, high school students,
                                    and new parents. As the world's technology for traveling and transportation gets more convenient, I see the need
                                    for understanding and seeing other cultures as a very important aspect not just for work, but for life.
                                </p>
                            </Row>

                            <Row>
                                <h2 className='title-header'>Always Learning</h2>
                                <p className='main-notes'>
                                    Coding, like any other language, changes every single day. For example in the English language, today's memes and slang could be
                                    tomorrow's anachronistic sayings. On the other hand, some picture with text, or a ten-second video can become
                                    the next viral thing on Earth!

                                    <br />
                                    With that said, the improvements of computers and the languages they use are changing
                                    and improving on a constant basis. While Javascript is a widely used language, many packages, frameworks, and APIs are
                                    getting created and updated every day. To me, adapting and familiarity are a must in both the coding and teaching world.
                               </p>
                                {/* Social Media Icons */}
                            </Row>

                            <Row>
                                <h2 className='title-header'>Social Media</h2>

                                <Col size='md-3'>
                                </Col>
                                <Col size='md-3'>
                                    <FAIcon
                                        onClick={this.handleLinks}
                                        prefix="fab"
                                        iconName="github"
                                    />
                                </Col>
                                <Col size='md-3'>
                                    <FAIcon
                                        onClick={this.handleLinks}
                                        prefix='fab'
                                        iconName='linkedin'
                                    />
                                </Col>
                            </Row>

                        </Col>
                        {/* End Right Side Column */}
                    </Row>


                </Container>
            </div>
        )
    }
}

export default Home;