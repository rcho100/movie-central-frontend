import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container className='home'>
            <header>
                <h1>Movie Central</h1>
                <p>Welcome!</p>
                <p>Feel free to browse through any of the current popular movies or any of the top rated movies.</p>
                <p>Please remember to login to save movies to your Watchlist.</p>
                <div className='main-links'>
                    <Link className='movies-link' to='/popular-movies'>
                        <p>Popular Movies</p>
                    </Link>
                    <Link className='movies-link' to='/top-rated-movies'>
                        <p>Top Rated Movies</p>
                    </Link>
                </div>
            </header>
        </Container>
    )
}

export default Home