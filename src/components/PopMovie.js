import React, { Component } from 'react'
import { connect } from 'react-redux'


class PopMovie extends Component {
    render() {
        
        const movieID = this.props.match.params.id
        const movie = this.props.popMovies.find(movie => parseInt(movie.id, 10) === parseInt(movieID, 10))
        console.log(movie)

        return (
            <div>
                <h2>{movie.title}</h2>
                <img alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>
                <p>Release Date: {movie.release_date}</p>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        popMovies: state.movies.popularMovies
    }
}

export default connect(mapStateToProps)(PopMovie)