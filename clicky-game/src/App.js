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
    score: 0,
    bestscore: 0
  };

  imageClick = event => {
    const currentPic = event;
    const clickedPic =
      this.state.clickedPic.indexOf(currentPic) > -1;
    let bestscore = this.state.bestscore;
    let score = this.state.score;


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
      score +=1
      if (score > bestscore){
       bestscore = score;
      }

      this.setState(
        {
          pictures: this.state.pictures.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedPic: this.state.clickedPic.concat(
            currentPic
          ),
          score:score,
          bestscore:bestscore,

            // bestscore: ()  => {
            //   if (score > bestscore){
            //     return score;
            //   }
            // }
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

      if (score > bestscore){
        bestscore = score;
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          bestscore={this.state.bestscore}
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
