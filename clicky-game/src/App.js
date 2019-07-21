import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/NavBar"
import pictures from "./pictures.json";

class App extends Component {

  state = {
    pictures:pictures,
    clickedPic: [],
    score: 0
  };

  imageClick = event => {
    const currentPic = event.id;
    const clickedPic =
      this.state.clickedPic.indexOf(currentPic) > -1;


    if (clickedPic) {
      this.setState({
        pictures: this.state.pictures.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPic: [],
        score: 0
      });
      alert("Nope, Play again?");


    } else {
      this.setState(
        {
          pictures: this.state.pictures.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedPic: this.state.clickedPic.concat(
            currentPic
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Winner!");
            this.setState({
              pictures: this.state.pictures.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedPic: [],
              score: 0
            });
          }
        }
      );
    }
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
        />
        <Title>Clicky Game</Title>
        {this.state.pictures.map(pictures => (
          <FriendCard
            id={pictures.id}
            key={pictures.id}
            image={pictures.image}
            imageClick={this.imageClick}
            clickedPic={pictures.clickedPic}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
