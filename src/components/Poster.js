import React from 'react'

const Poster = ({ movie }) => <img alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}/>

export default Poster