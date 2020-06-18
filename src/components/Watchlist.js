import React from 'react'
import { connect } from 'react-redux'
import Poster from './Poster'
import { Link } from 'react-router-dom'

const Watchlist = (props) => {
    if (props.currentUser) {
        return (
            <div>
                <h2>My Watchlist</h2>
                {props.currentUser.watchlist.map(movie => (
                    <Link to={`/movies/${movie.attributes.id_from_api}`} key={movie.attributes.title} >
                        <Poster movie={movie.attributes} />
                    </Link>
                ))}
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
    
}
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}
  
export default connect(mapStateToProps)(Watchlist)