import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Poster = (props) => {
    return (
        <Link className='poster-card-link' to={`/movies/${props.id}`}>
            <Card>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.movie["poster_path"]} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>Details</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Poster