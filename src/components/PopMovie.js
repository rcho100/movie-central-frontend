import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieDetails } from '../actions/movieDetails'

let movieID;

class PopMovie extends Component {
    componentDidMount() {
        this.props.movieDetails(movieID)
    }

    render() {
        movieID = this.props.match.params.id
        
        if (this.props.movie) {
            const {id, title, backdrop_path, poster_path, overview, tagline, release_date, runtime} = this.props.movie

            return (
                <div>
                    <h2>{title}</h2>
                    <img alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + poster_path}/>
                    <p>Release Date: {release_date}</p>
                    <p>Runtime: {runtime} minutes</p>
                    <p>Genres: {this.props.genres.join(', ')}</p>
                    <h5>{tagline}</h5>
                    <img alt="movie backdrop" src={"https://image.tmdb.org/t/p/w500" + backdrop_path}/>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movieDetails.details,
        genres: state.movieDetails.genres
    }
}

export default connect(mapStateToProps, { movieDetails })(PopMovie)