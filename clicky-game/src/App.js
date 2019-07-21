import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/NavBar"
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pictures:pictures,
    clickedPic: [],
    score: 0
  };

  imageClick = event => {
    const currentPic = event.target.alt;
    const clickedPic =
      this.state.clickedPic.indexOf(currentPic) > -1;

    //if you click on a cat that has already been selected, the game is reset and cards reordered
    if (clickedPic) {
      this.setState({
        pictures: this.state.pictures.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPic: [],
        score: 0
      });
      alert("You lose. Play again?");

      //if you click on an available cat, your score is increased and cards reordered
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
        //if you get all 12 cat corrent you get a congrats message and the game resets
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
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
  // Map over this.state.friends and render a FriendCard component for each friend object
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
            clickedPic={pictures.clickedPic}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
