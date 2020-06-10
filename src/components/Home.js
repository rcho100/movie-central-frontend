import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Movie Central</h2>
                <Link to='/popular-movies'>
                    <p>Popular Movies</p>
                </Link>
                <Link to='/top-rated-movies'>
                    <p>Top Rated Movies</p>
                </Link>
            </div>
        )
    }
}

export default Home