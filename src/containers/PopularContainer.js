import React from 'react'
import Poster from '../components/Poster'

const PopularContainer = ({ popMovies }) =>{
    console.log("working", popMovies)
    return (
        <div>
            <p>Popular Movies</p>
            {popMovies.slice(10).map(movie => <Poster key={movie.id} movie={movie} />)}
        </div>
    )
}

export default PopularContainer