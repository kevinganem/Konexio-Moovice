// REACT
import React from "react";
// COMPONENT
import Card from "../components/Card";

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favIDs: this.getStorage(),
      isLoading: true,
    };
  }

  getMovie(id) {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=5db36b700acda7185166a4e97a159b98`
    )
      .then((res) => res.json())
      .then((movieId) => {
        this.state.movies.push(movieId);
        this.setState({
          movies: this.state.movies,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    const uniqueFav = Array.from(new Set(this.state.favIDs));
    uniqueFav.forEach((movie) => this.getMovie(movie));
  }

  getStorage() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Favorites</h1>
        <div className="d-flex flex-wrap justify-content-around">
          {this.state.isLoading ? (
            <div className="spinner-border text-primary" role="status" />
          ) : (
            <>
              {this.state.movies.map((movie) => (
                <Card
                  handleClick={() => {}}
                  key={movie.id}
                  movieSelected={movie}
                />
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Favorites;
