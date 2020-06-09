import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { popularMovies } from '../actions/movies'

class PopularContainer extends Component {
    componentDidMount() {
        this.props.popularMovies()
    }

    render() {
        const { popMovies } = this.props
        return (
            <div>
                <p>Popular Movies</p>
                {popMovies.slice(10).map(movie => <Poster key={movie.id} movie={movie} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        popMovies: state.movies.popularMovies
    }
}
export default connect(mapStateToProps, { popularMovies })(PopularContainer)