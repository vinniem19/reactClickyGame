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
 
 

function Card() {
    return(
        <div class="container">
        <img className="card-img" src={blueTrainLeft} alt=""></img>
        <img className="card-img" src={blueTrainRight} alt=""></img>
        <img className="card-img" src={coalTrainLeft} alt=""></img>
        <img className="card-img" src={colorTrainLeft} alt=""></img>
        <img className="card-img" src={colorTrainRight} alt=""></img>
        <img className="card-img" src={funTrainLeft} alt=""></img>
        <img className="card-img" src={pastelTrainRight} alt=""></img>
        <img className="card-img" src={redTrainLeft} alt=""></img>
        <img className="card-img" src={yellowTrainRight} alt=""></img>

        </div>


    );
}

export default Card;