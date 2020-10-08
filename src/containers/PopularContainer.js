import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { popularMovies } from '../actions/movies'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class PopularContainer extends Component {
    componentDidMount() {
        this.props.popularMovies()
    }

    render() {
        const { popMovies } = this.props
        return (
            <Container className='movie-list'>
                <h1>Popular Movies</h1>
                <div className="card-deck">
                    {!!popMovies ?
                        popMovies.map(movie => {
                            return (
                                <Link className='poster-card' to={`/movies/${movie.id}`} key={movie.id} >
                                    <Poster movie={movie} />
                                </Link>
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
        popMovies: state.movies.popularMovies
    }
}
export default connect(mapStateToProps, { popularMovies })(PopularContainer)