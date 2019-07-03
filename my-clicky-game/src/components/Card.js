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
 

class Card extends React.Component{

    state = {
        count: 0,
        highScore: 0,
        doubleClick: false
      };

      // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

// let scoreData = {
//   score: 0,
//   highScore: 0
// }
//  handleClick = () => {
//   console.log("clicked");
//  }
// function Card() {
    render() {
    return(

        <div className="container">
            <div className="card-header">
                Score: {this.state.count} | High Score: {this.state.highScore}
                
            </div>
        <img className="card-img" src={blueTrainLeft} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={blueTrainRight} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={coalTrainLeft} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={colorTrainLeft} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={colorTrainRight} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={funTrainLeft} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={pastelTrainRight} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={redTrainLeft} alt="" onClick={this.handleIncrement}></img>
        <img className="card-img" src={yellowTrainRight} alt="" onClick={this.handleIncrement}></img>

        </div>


    );
    }
}
export default Card;