import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Card />
    
    </div>
  );
}

export default App;
