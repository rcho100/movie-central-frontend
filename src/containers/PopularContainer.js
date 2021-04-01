import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Poster from '../components/Poster';
import { popularMovies } from '../actions/movies';

class PopularContainer extends Component {
  componentDidMount() {
    this.props.popularMovies();
  }

  render() {
    const { popMovies } = this.props;
    return (
      <Container className="movie-list">
        <h1>Popular Movies</h1>
        <div className="card-deck">
          {popMovies
            ? popMovies.map((movie) => (
              <Poster movie={movie} id={movie.id} key={movie.title} />
            ))
            : <h2 className="loading">Loading...</h2>}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  popMovies: state.movies.popularMovies,
});
export default connect(mapStateToProps, { popularMovies })(PopularContainer);
