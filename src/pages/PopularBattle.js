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
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  }

  handleBattle = (id) => {
    this.setState({
      favorites: [...this.state.favorites, id],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...this.state.favorites, id])
    );
    console.log(localStorage);
  };

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
    const { movies, currentBattle } = this.state;
    return (
      <>
        <h1>PopularBattle</h1>
        <div className="">
          <Card
            handleClick={this.handleBattle}
            movieSelected={movies[currentBattle]}
            key={movies.id}
          />
          <Card
            handleClick={this.handleBattle}
            movieSelected={movies[currentBattle + 1]}
            key={movies.id}
          />
        </div>
      </>
    );
  }
}

export default PopularBattle;
