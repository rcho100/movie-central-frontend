import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { topRatedMovies } from '../actions/movies'
import Container from 'react-bootstrap/Container'

class TopRatedContainer extends Component {
    componentDidMount() {
        this.props.topRatedMovies()
    }

    render() {
        const { topMovies } = this.props
        return (
            <Container className='movie-list'>
                <h1>Top Rated Movies</h1>
                <div className="card-deck">
                    {!!topMovies ?
                        topMovies.map(movie => {
                            return (
                                <Poster movie={movie} id={movie.id} key={movie.title}/>
                            )
                        })
                    :
                    <h2 className="loading">Loading...</h2>
                    }
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