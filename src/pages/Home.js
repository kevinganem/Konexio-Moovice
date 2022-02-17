// REACT
import React from "react";
// ROUTER

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
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
        <h1 className="text-center">Home</h1>
        <div className="p-3">
          <h2>Popular Movies</h2>
          <div className="d-flex overflow-auto img-thumbnail">
            {this.state.movies.map((movie) => (
              <img
                //  onClick={() => handleClick(movieSelected.id)}
                src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                className="card-img-top shadow p-2 rounded-3"
                alt="Poster"
                style={{ height: "15rem", width: "10rem" }}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
