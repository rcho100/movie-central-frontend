import React from 'react'
import Poster from './Poster'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


const Watchlist = (props) => {
    if (props.currentUser.user) {
        return (
            <Container className='movie-list'>
                <h1>My Watchlist</h1>
                <div className="card-deck">
                    {props.currentUser.watchlist.map(movie => (
                        <Link className='poster-card' to={`/movies/${movie.attributes.id_from_api}`} key={movie.attributes.title} >
                            <Poster movie={movie.attributes} />
                        </Link>
                    ))}
                </div>
            </Container>
        )
    } else {
        return <h2 className="loading">Loading...</h2>
    }    
}

export default Watchlist