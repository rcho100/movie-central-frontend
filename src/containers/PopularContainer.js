import React, { Component } from 'react'
import Poster from '../components/Poster'
import { connect } from 'react-redux'
import { popularMovies } from '../actions/movies'
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
                                <Poster movie={movie} key={movie.id}/>
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