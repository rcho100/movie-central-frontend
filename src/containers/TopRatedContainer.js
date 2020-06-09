import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { topRatedMovies } from '../actions/movies'

class TopRatedContainer extends Component {
    componentDidMount() {
        this.props.topRatedMovies()
    }

    render() {
        const { topMovies } = this.props
        return (
            <div>
                <p>Top Rated Movies</p>
                {topMovies.slice(10).map(movie => <Poster key={movie.id} movie={movie} />)}
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