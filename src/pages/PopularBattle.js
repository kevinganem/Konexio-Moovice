// REACT
import React from "react";
// COMPONENT
import Card from "../components/Card";

class PopularBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5db36b700acda7185166a4e97a159b98"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ movies: res.results });
      });
  }
  render() {
    return (
      <>
        <h1>PopularBattle</h1>
        <div className="">
          <Card movieSelected={this.state.movies[this.state.currentBattle]} />
          <Card
            movieSelected={this.state.movies[this.state.currentBattle + 1]}
          />
        </div>
      </>
    );
  }
}

export default PopularBattle;
