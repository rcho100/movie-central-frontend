import React from 'react'
import { Link } from 'react-router-dom'

const Poster = ({ movie }) => {
    return (
        <Link to={`/popular-movies/${movie.id}`}>
            <img alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}/>
        </Link>
    )
}

export default Poster