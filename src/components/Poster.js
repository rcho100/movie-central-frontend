import React from 'react'

const Poster = ({ movie }) => {
    return (
        <div>
            <img alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}/>
        </div>
    )
}

export default Poster