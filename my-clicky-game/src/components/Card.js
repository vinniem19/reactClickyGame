import React from 'react';
import "../styles/Card.css";

function Card(props) {
    // handleClick = id => {
    //     let doubleClick;
    //     let update = {
    //         heroes: [...this.state.heroes],
    //         score: this.state.score,
    //         topScore: this.state.topScore
    //     }
    // }

    // randomizing the trains
    // update.newTrains = update.newTrains.sort(() => .5 - Math.random());
    
    
    // using trains.json, if this.id is clicked then countClick goes up
        // if (this.trains.id.click === true) {
        //     this.setState({clickCount: this.state.clickCount + 1})
        // }
        
    // after count click is at 2, then doubleClick changes to true and
    // end game
  // };

// let scoreData = {
//   score: 0,
//   highScore: 0
// }
//  handleClick = () => {
//   console.log("clicked");
//  }
   // const Card = () => {
    
    return (

        
        <div id="img-container">
             <div className="card-header">
                Score: {props.count} | High Score: {props.highScore}
            </div>
                <img src={props.image} alt={props.name} onClick={props.handleIncrement} />
            </div>
              
        
    );
    } 


export default Card;