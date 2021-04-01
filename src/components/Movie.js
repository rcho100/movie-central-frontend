import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { movieDetails } from '../actions/movieDetails';
import AddMovieBtn from './AddMovieBtn';
import { sendMovieToAdd } from '../actions/currentUser';

let movieID;
const movieToAdd = { movDetails: {} };

class Movie extends Component {
  componentDidMount() {
    this.props.movieDetails(movieID);
    window.scrollTo(0, 0);
  }

  render() {
    movieID = this.props.match.params.id;

    if (this.props.movie) {
      const {
        id, title, backdrop_path, poster_path, overview, tagline, release_date, runtime,
      } = this.props.movie;

      movieToAdd.movDetails.id = id;
      movieToAdd.movDetails.title = title;
      movieToAdd.movDetails.backdrop_path = backdrop_path;
      movieToAdd.movDetails.poster_path = poster_path;
      movieToAdd.movDetails.overview = overview;
      movieToAdd.movDetails.tagline = tagline;
      movieToAdd.movDetails.release_date = release_date;
      movieToAdd.movDetails.runtime = runtime;

      const { history, sendMovieToAdd } = this.props;
      return (
        <Container>
          <h1>{title}</h1>
          <img className="backdrop" alt="movie backdrop" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
          <Container className="movie-poster-details">
            <img className="movie-poster" alt="movie poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <div className="movie-details">
              <h2>{title}</h2>
              <h5 className="tagline">{tagline}</h5>
              <p>
                Release Date:
                {' '}
                {release_date}
              </p>
              <p>
                Runtime:
                {' '}
                {runtime}
                {' '}
                minutes
              </p>
              <p>
                Genres:
                {' '}
                {this.props.genres.join(', ')}
              </p>
              <h5 className="overview">Overview</h5>
              <p>{overview}</p>
              <AddMovieBtn
                sendMovieToAdd={sendMovieToAdd}
                movieToAdd={movieToAdd}
                history={history}
              />
            </div>
          </Container>
        </Container>
      );
    }
    return (
      <h2 className="loading">Loading...</h2>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movieDetails.details,
  genres: state.movieDetails.genres,
});

export default connect(mapStateToProps, { movieDetails, sendMovieToAdd })(Movie);
