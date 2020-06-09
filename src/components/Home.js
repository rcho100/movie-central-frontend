import React, { Component } from 'react'

class Home extends Component {

    goToPopMovies = () => {
        this.props.history.push('/popular-movies')
    }

    goToTopRatedMovies = () => {
        this.props.history.push('/top-rated-movies')
    }

    render() {
        return (
            <div>
                <h2>Movie Central</h2>
                <p onClick={this.goToPopMovies}>Popular Movies</p>
                <p onClick={this.goToTopRatedMovies}>Top Rated Movies</p>
            </div>
        )
    }
}

export default Home