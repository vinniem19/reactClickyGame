import React from "react";
import Card from "./Card.js";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  
      // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // handleIncrement increases this.state.score by 1
  // handleIncrement = () => {
    // We always use the setState method to update a component's state
   // this.setState({ score: this.state.score + 1 });
  // };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Card
          score={this.state.score}
        />
      </div>
    );
  }
}


export default Counter;
