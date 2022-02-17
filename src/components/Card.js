// REACT
import React from "react";

class Card extends React.Component {
  render() {
    const { movieSelected, handleClick } = this.props;
    return (
      <>
        <div className="p-2">
          <div className="card shadow" style={{ width: "18rem" }}>
            <button onClick={() => handleClick(movieSelected.id)}>
              <img
                src={
                  "https://image.tmdb.org/t/p/w300/" + movieSelected.poster_path
                }
                className="card-img-top shadow"
                alt="Poster"
                style={{ height: "20rem" }}
              />
            </button>
            <div className="card-body">
              <h5 className="card-title">{movieSelected.title}</h5>
              <p
                className="card-text overflow-auto"
                style={{ height: "10rem" }}
              >
                {movieSelected.overview}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{movieSelected.release_date}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
