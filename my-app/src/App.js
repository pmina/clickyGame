import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import images from "./images.json";

let testArray = []
class App extends Component {
    state = {
      images,
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
    };
  
    shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    handleIncrement = id => {
      const images = this.state.images;
      const clickedImage = images.filter(image => image.id === id)
  
  
      for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] === clickedImage[0].id) {
          if (this.state.curScore > this.state.topScore) {
            this.setState({ topScore: this.state.curScore });
          }
          this.setState({ message: "Oops! Try again!" });
          this.setState({ curScore: 0 });
          testArray = []
          return
        }
      }
      if (1 + this.state.curScore === 12) {
        this.setState({ message: "Winner! Click an image to play again" })
        this.setState({ curScore: 0 });
        this.setState({ topScore: this.state.curScore +1 });
        testArray = []
        return
      }
      testArray.push(clickedImage[0].id)
  
      this.setState({ message: "Well Done! Click another!" })
      this.setState({ curScore: this.state.curScore + 1 });
  
      this.shuffleArray(images)
  
  
    };
  
    render() {
      return (
        <Wrapper>
          <Title>
          <Navbar
            message={this.state.message}
            curScore={this.state.curScore}
            topScore={this.state.topScore}
          />
            Click on an image to start. But don't click the same image twice!
          </Title>
          {this.state.images.map(image => (
            <FriendCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </Wrapper>
      );
    }
  }
  export default App;