import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import trains from './trains.json';

class App extends React.Component {

  state = {
    trains,
    count: 0,
    highScore: 0 
  };

  
  
  render() {
    // handleIncrement increases this.state.count by 1
    const handleIncrement = () => {
     // We always use the setState method to update a component's state
   this.setState({count: this.state.count + 1})};
   
   // randomizes image positions display
   trains.sort(() => .5 - Math.random());

   // get high score 
      if (this.state.count > this.state.highScore) {
        this.setState({highScore: this.state.count})
      }
    

    return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      
        
        
      {this.state.trains.map(train => (
      <Card
      id={train.id}
      image={train.image}
      name={train.name} 
      count={this.state.count}
      highScore={this.state.highScore}
      handleIncrement={handleIncrement}
      key={this.id}
      
      />
      ))
    }
    
    </div>
  );
 }
}
  
export default App;
