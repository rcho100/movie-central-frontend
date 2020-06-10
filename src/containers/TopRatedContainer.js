import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { topRatedMovies } from '../actions/movies'
import { Link } from 'react-router-dom'

class TopRatedContainer extends Component {
    componentDidMount() {
        this.props.topRatedMovies()
    }

    render() {
        const { topMovies } = this.props
        return (
            <div>
                <p>Top Rated Movies</p>
                {topMovies.slice(10).map(movie => (
                    <Link to={`/top-rated-movies/${movie.id}`} key={movie.id} >
                        <Poster movie={movie} />
                    </Link>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topMovies: state.movies.topRatedMovies
    }
}
export default connect(mapStateToProps, { topRatedMovies })(TopRatedContainer)