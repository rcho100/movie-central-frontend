import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieDetails } from '../actions/movieDetails'

let movieID;
let movieDisplayed = {};

class PopMovie extends Component {
    componentDidMount() {
        this.props.movieDetails(movieID)
    }

    render() {
            movieID = this.props.match.params.id

            const {id, title, backdrop_path, poster_path, overview, tagline, release_date, runtime} = this.props.movDetails
            movieDisplayed.id = id
            movieDisplayed.title = title
            movieDisplayed.backdrop_path = backdrop_path
            movieDisplayed.poster_path = poster_path
            movieDisplayed.overview = overview
            movieDisplayed.tagline = tagline
            movieDisplayed.release_date = release_date
            movieDisplayed.runtime = runtime

            return (
                <div>
                    <h2>{movieDisplayed.title}</h2>
                    <img alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + movieDisplayed.poster_path}/>
                    <p>Release Date: {movieDisplayed.release_date}</p>
                    <p>Runtime: {movieDisplayed.runtime} minutes</p>
                    <h5>{movieDisplayed.tagline}</h5>
                    <img alt="movie backdrop" src={"https://image.tmdb.org/t/p/w500" + movieDisplayed.backdrop_path}/>
                    <h4>Overview</h4>
                    <p>{movieDisplayed.overview}</p>
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        movDetails: state.movieDetails
    }
}

export default connect(mapStateToProps, { movieDetails })(PopMovie)