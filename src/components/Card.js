// REACT
import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="p-2">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/w300${this.props.movieSelected.poster_path}`}
              className="card-img-top"
              alt="Poster"
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.movieSelected.title}</h5>
              <p
                className="card-text overflow-auto"
                style={{ height: "10rem" }}
              >
                {this.props.movieSelected.overview}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.props.movieSelected.release_date}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
