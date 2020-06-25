import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieDetails } from '../actions/movieDetails'
import Button from 'react-bootstrap/Button'
import { sendMovieToAdd } from '../actions/currentUser'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let movieID;
let movieToAdd = {movDetails: {}};

class Movie extends Component {
    componentDidMount() {
        this.props.movieDetails(movieID)
    }

    render() {
        movieID = this.props.match.params.id
        
        if (this.props.movie) {
            const {id, title, backdrop_path, poster_path, overview, tagline, release_date, runtime} = this.props.movie

            movieToAdd.movDetails.id = id
            movieToAdd.movDetails.title = title
            movieToAdd.movDetails.backdrop_path = backdrop_path
            movieToAdd.movDetails.poster_path = poster_path
            movieToAdd.movDetails.overview = overview
            movieToAdd.movDetails.tagline = tagline
            movieToAdd.movDetails.release_date = release_date
            movieToAdd.movDetails.runtime = runtime

            const {history, sendMovieToAdd} = this.props
            return (
                <Container>
                    <h1>{title}</h1>
                        <img className='backdrop' alt="movie backdrop" src={"https://image.tmdb.org/t/p/original" + backdrop_path}/>
                    <Container className='movie-poster-details'>
                        <Row>
                            <Col>
                                <img className='movie-poster' alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + poster_path}/>
                            </Col>
                            <Col>
                                <h2>{title}</h2>
                                <h5>{tagline}</h5>
                                <p>Release Date: {release_date}</p>
                                <p>Runtime: {runtime} minutes</p>
                                <p>Genres: {this.props.genres.join(', ')}</p>
                                <h4>Overview</h4>
                                <p>{overview}</p>
                                <Button onClick={() => sendMovieToAdd(movieToAdd, history)}>Add to watchlist</Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
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

export default connect(mapStateToProps, { movieDetails, sendMovieToAdd })(Movie)