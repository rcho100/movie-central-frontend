import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { topRatedMovies } from '../actions/movies'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class TopRatedContainer extends Component {
    componentDidMount() {
        this.props.topRatedMovies()
    }

    render() {
        const { topMovies } = this.props
        return (
            <Container className='main-movie-list'>
                <h1>Top Rated Movies</h1>
                <div className="card-deck">
                    {topMovies.map(movie => {
                        return (
                            <Link className='poster-card' to={`/movies/${movie.id}`} key={movie.id} >
                                <Poster movie={movie} />
                            </Link>
                        )
                    })}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        topMovies: state.movies.topRatedMovies
    }
}
export default connect(mapStateToProps, { topRatedMovies })(TopRatedContainer)