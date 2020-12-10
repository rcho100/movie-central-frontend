import React from 'react'
import Poster from './Poster'
import Container from 'react-bootstrap/Container'


const Watchlist = (props) => {
    if (props.currentUser.user) {
        return (
            <Container className='movie-list'>
                <h1>My Watchlist</h1>
                <div className="card-deck">
                    {props.currentUser.watchlist.map(movie => (
                        <Poster movie={movie.attributes} id={movie.attributes.id_from_api} key={movie.attributes.title} />
                    ))}
                </div>
            </Container>
        )
    } else {
        return <h2 className="loading">Loading...</h2>
    }    
}

export default Watchlist