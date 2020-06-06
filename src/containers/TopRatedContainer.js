import React from 'react'
import Poster from '../components/Poster'

const TopRatedContainer = ({ topMovies }) =>{
    console.log("working top movies", topMovies)
    return (
        <div>
            <p>Top Rated Movies</p>
            {topMovies.slice(10).map(movie => <Poster key={movie.id} movie={movie} />)}
        </div>
    )
}

export default TopRatedContainer