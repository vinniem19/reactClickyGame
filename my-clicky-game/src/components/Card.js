import React from 'react';
import "../styles/Card.css";
import blueTrainLeft from "../blue-train-left.jpg";
import blueTrainRight from "../blue-train-right.jpg";
import coalTrainLeft from "../coal-train-left.jpg";
import colorTrainLeft from "../color-train-left.png";
import colorTrainRight from "../colorTrainRight.jpg";
import funTrainLeft from "../fun-train-left.png";
import pastelTrainRight from "../pastel-train-right.jpg";
import redTrainLeft from "../red-train-left.jpg";
import yellowTrainRight from "../yellow-train-right.jpg";
 

 

function Card(props) {
    
    return(
        <div className="container">
            <div className="card-header">
                Score: {props.score} | High Score: 
            </div>
        <img className="card-img" src={blueTrainLeft} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={blueTrainRight} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={coalTrainLeft} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={colorTrainLeft} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={colorTrainRight} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={funTrainLeft} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={pastelTrainRight} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={redTrainLeft} alt="" onClick={props.handleIncrement}></img>
        <img className="card-img" src={yellowTrainRight} alt="" onClick={props.handleIncrement}></img>

        </div>


    );
    }

export default Card;