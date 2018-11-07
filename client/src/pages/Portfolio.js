import React, { Component } from "react";

//Bootstrap based Containers
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";



//Personal Assets
import Images from "../utils/Images";
import './transitions.css';
import './pages.css';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,

        }
    }

    picturesloaded = () => {
        this.setState({
            loaded: true
        })
    }

    componentDidMount(){
        this.picturesloaded();
    }

    render() {
        return (
            <div>
                <Container>

                    <h1 className='header'>
                        Completed Projects
                    </h1>

                    <Row>
                        <div className='col-md-4'>
                            <Card
                                src={Images[4]} alt={"marvel-collab"}
                                cardTitle={'Marvel Collab Finder'}
                                github='https://github.com/jasonfelipe/Marvel-Collab-Finder'
                                projecturl="https://jasonfelipe.github.io/Marvel-Collab-Finder/"
                                cardText="A mobile-friendly app that uses Google's firebase, Marvel's Comic book API
                                and Ebay's API to search for characters' collaborations and their respective comics."
                            >
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card
                                src={Images[0]} alt={"0penroom"}
                                cardTitle={'0penroom'}
                                github='https://github.com/jasonfelipe/0penroom'
                                projecturl='http://www.0penroom.com/'
                                cardText="A simple chatroom using Socket.io, MySQL, and one HTML page loaded with jQuery."
                            >
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card
                                src={Images[1]} alt={"AHIscanner"}
                                cardTitle={'AHI Scanner'}
                                github='https://github.com/jasonfelipe/AHI-Scanner'
                                projecturl='https://ahi-scanner.herokuapp.com/'
                                cardText="A mobile-friendly product scanner currently using the OpenFDA API, 
                                Quagga.js barcodescanner, and MongoDB (Scanner currently doesn't work on mobile)."
                            >
                            </Card>
                        </div>
                    </Row>

                    <h1 className='header'>
                        Other Small Works
                    </h1>

                    <Row>
                        <div className='col-md-4'>
                            <Card
                                src={Images[5]} alt={"sfclickgame"}
                                cardTitle={'Street Fighter Click Game'}
                                github='https://github.com/jasonfelipe/clickygame'
                                projecturl='https://jfelipe-sfclickygame.herokuapp.com/'
                                cardText="A simple Street Fighter themed Click Game made with React"
                            >
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card
                                src={Images[2]} alt={"friendfinder"}
                                cardTitle={'Friend Finder'}
                                github='https://github.com/jasonfelipe/friendfinder'
                                projecturl='https://jfelipe-friendfinder.herokuapp.com/'
                                cardText="A small app that lets users fill a survey and then matches them from 
                                past survey takers. Made with Express."
                            >
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card
                                src={Images[3]} alt={"liribot"}
                                cardTitle={'LIRI Bot'}
                                github='https://github.com/jasonfelipe/liri-node-app'
                                projecturl='https://github.com/jasonfelipe/liri-node-app'
                                cardText="A simple Node app that lets users get their own 
                                twitter posts from the twitter API, search movies using the 
                                OMDB API, and music from the Spotify API."
                            >
                            </Card>
                        </div>
                    </Row>


                </Container>
            </div>
        )
    }
}

export default Portfolio;