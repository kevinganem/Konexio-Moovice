// REACT
import React from "react";
// COMPONENT
import Card from "../components/Card";
// MOMENT
import moment from "moment";

class WeeklyBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      pages: 0,
      currentBattle: 0,
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      isLoading: true,
    };
  }

  handleBattle = (id) => {
    this.setState({
      currentBattle: this.state.currentBattle + 2,
      favorites: [...this.state.favorites, id],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...this.state.favorites, id])
    );
    console.log(this.state.favorites);
  };

  componentDidMount() {
    const today = moment().format("YYYY-MM-DD");
    const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=5db36b700acda7185166a4e97a159b98`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          movies: res.results,
          isLoading: false,
        });
      });
  }
  render() {
    const { isLoading, movies, currentBattle } = this.state;

    return (
      <>
        <h1 className="text-center">WeeklyBattle</h1>
        {isLoading && (
          <div className="spinner-border text-primary" role="status" />
        )}
        {movies.length > 0 && currentBattle < movies.length - 1 && (
          <div className="d-flex justify-content-evenly flex-wrap">
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
        )}
        {currentBattle >= movies.length - 1 && (
          <h1 className="text-center">Vous avez parcouru tous les films !</h1>
        )}
      </>
    );
  }
}

export default WeeklyBattle;
