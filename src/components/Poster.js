import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Poster = ({ movie }) => {
    return (
        <Link className='poster-card-link' to={`/movies/${movie.id}`}>
            <Card>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Details</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Poster