// REACT
import React from "react";
// COMPONENT
import Card from "../components/Card";
// MOMENT
import moment from "moment";

class Weekly extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const today = moment().format("YYYY-MM-DD");
    const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=5db36b700acda7185166a4e97a159b98`
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
        <h1 className="text-center">Weekly</h1>
        <div className="d-flex flex-wrap justify-content-around">
          {this.state.movies.map((movie) => (
            <Card handleClick={() => {}} key={movie.id} movieSelected={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Weekly;
