import React from "react";
import './Jumbotron.css'

const Jumbotron = props =>
  <div className={`jumbotron${props.fluid ? "-fluid" : ""} parallax`} {...props} />;

export default Jumbotron;
