import React from 'react'
import Card from 'react-bootstrap/Card'

const Poster = ({ movie }) => {
    return (
        <Card>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Details</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Poster