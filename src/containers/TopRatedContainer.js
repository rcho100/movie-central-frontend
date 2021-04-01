import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Poster from '../components/Poster';
import { topRatedMovies } from '../actions/movies';

class TopRatedContainer extends Component {
  componentDidMount() {
    this.props.topRatedMovies();
  }

  render() {
    const { topMovies } = this.props;
    return (
      <Container className="movie-list">
        <h1>Top Rated Movies</h1>
        <div className="card-deck">
          {topMovies
            ? topMovies.map((movie) => (
              <Poster movie={movie} id={movie.id} key={movie.title} />
            ))
            : <h2 className="loading">Loading...</h2>}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  topMovies: state.movies.topRatedMovies,
});
export default connect(mapStateToProps, { topRatedMovies })(TopRatedContainer);
