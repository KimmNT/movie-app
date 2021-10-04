import React from "react";
import "./MovieDetail.css";

class MovieDetails extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie-detail">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie-detail-inf">
            <ul>
              <li className="movie-detail-name"><b>Name:</b> {location.state.title}</li>
              <li className="movie-detail-year"><b>Year:</b> {location.state.year}</li>
              <li className="movie-detail-genres"><b>Genres:</b> {location.state.genres}</li>
              <li className="movie-detail-desc"><b>Description: </b>{location.state.summary.slice(0,250)}...</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetails;
